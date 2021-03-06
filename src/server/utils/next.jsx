import fs, { link } from "fs";
import path from "path";
// Server render
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
// server router
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
// redux
import { Provider } from "react-redux";
import getStore from "@/redux/store";

const statsFile = path.resolve(
  process.cwd(),
  "dist/client/loadable-stats.json"
);

class Next {
  /**
   * @description 拉取HTML模版
   * @returns {Promise<HTMLString>} HTML模版字符串
   */
  loadHtmlTmp() {
    const tmpPath = path.resolve(process.cwd(), "dist/index.html");
    return new Promise((resolve, reject) => {
      if (fs.existsSync(tmpPath)) {
        fs.readFile(tmpPath, "utf8", (err, data) => {
          if (err) console.log(err);
          resolve(data);
        });
      }
    });
  }

  /**
   * @description 后端执行路由组件异步操作
   * @param {Object} ctx  Koa context
   * @param {Array<Routes>} routes 前端导出路由
   * @returns {Promise<store>} Redux Store
   */
  async executeAsyncData(ctx, routes) {
    // 服务端执行异步数据拉取
    const store = getStore();
    // 通过真实路由匹配路由组件
    for (let item of matchRoutes(routes, ctx.path)) {
      // item: {route: [Route], match: [{path, url, params}]}
      // 执行所有异步操作并初始化store
      // item = await item;
      item.route.loadData &&
        (await item.route.loadData({ store, router: item.route }));
    }
    return store;
  }

  /**
   * @description 拿到动态import对应的组件JS和CSS
   * @param {Object} extractor
   * @returns {Object} js&links
   */
  getChunkFiles(extractor) {
    const scriptTags = extractor.getScriptTags();
    const injectScripts = scriptTags;
    // add preload
    const linkTags = extractor.getLinkTags();
    const styleTags = extractor.getStyleTags();
    const injectLinks = linkTags + styleTags;
    return {
      injectScripts,
      injectLinks
    };
  }

  /**
   * @description 根据路由执行渲染
   * @param {Array<Routes>} routes 前端导出路由
   * @param {Object} ctx  koa context
   */
  async render(ctx, routes) {
    const store = await this.executeAsyncData(ctx, routes);
    // 数据注水&脱水，在window上挂载经过asyncData之后的初始化state
    const injectInitialState = `<script>window.__INITIAL_STATE__=${JSON.stringify(
      store.getState()
    )}</script>`;
    const extractor = new ChunkExtractor({ statsFile });
    // 通过location属性向StaticRouter传入真实路由，匹配路由组件
    const reactSSR = ReactDOMServer.renderToString(
      <ChunkExtractorManager extractor={extractor}>
        <Provider store={store}>
          <StaticRouter context={{}} location={ctx.path}>
            <div>{renderRoutes(routes)}</div>
          </StaticRouter>
        </Provider>
      </ChunkExtractorManager>
    );
    const { injectLinks, injectScripts } = this.getChunkFiles(extractor);
    // helmet 优化 SEO
    const helmet = Helmet.renderStatic();
    const helmetString = helmet.title.toString() + helmet.meta.toString();
    const htmlTemplate = await this.loadHtmlTmp();
    return htmlTemplate
      .replace("<!--react-ssr-outlet-->", reactSSR)
      .replace("<!-- injectInitialState -->", injectInitialState)
      .replace("<!-- injectHelmet -->", helmetString)
      .replace("<!-- injectLinks -->", injectLinks)
      .replace("<!-- injectScripts -->", injectScripts);
  }
}

export default new Next();
