import fs from 'fs'
import path from 'path'
// Server render
import React from 'react'
import ReactDOMServer from 'react-dom/server';
// server router
import { StaticRouter } from 'react-router-dom'
import Layout from '@/container/Layout/Layout'
import IndexRoute from '@/routers/IndexRoute/IndexRoute'
// redux
import { Provider } from 'react-redux';
import getStore from '@/redux/store'

class Next {
    loadHtmlTmp() {
        const tmpPath = path.resolve(process.cwd(), 'dist/index.html')
        return new Promise((resolve, reject) => {
            if (fs.existsSync(tmpPath)) {
                fs.readFile(tmpPath, 'utf8', (err, data) => {
                    if (err) console.log(err)
                    resolve(data)
                })
            }
        })
    }
    async render(ctx) {
        const reactSSR = ReactDOMServer.renderToString((
            // 通过location属性向StaticRouter传入真实路由，匹配路由组件
            <Provider store={getStore()}>
                <StaticRouter context={{}} location={ctx.path}>
                    <Layout>
                        <IndexRoute />
                    </Layout>
                </StaticRouter>
            </Provider>
          ))
          const htmlTemplate = await this.loadHtmlTmp()
          return htmlTemplate.replace('<!--react-ssr-outlet-->', reactSSR)
    }
}

export default new Next