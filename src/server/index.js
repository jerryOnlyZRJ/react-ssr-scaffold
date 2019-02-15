import fs from 'fs'
import path from 'path'
import 'babel-polyfill'
import Koa from 'koa'
import assets from "koa-static";
import Router from 'koa-router'
import React from 'react'
import ReactDOMServer from 'react-dom/server';
import Hello from '../components/Hello/Hello.jsx'

function loadHtmlTmp() {
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

const app = new Koa();
var router = new Router();

app.use(assets(path.resolve(process.cwd(), 'dist/client')))

router.get('/', async (ctx, next) => {
  const reactSSR = ReactDOMServer.renderToString( < Hello /> )
  const htmlTemplate = await loadHtmlTmp()
  ctx.body = htmlTemplate.replace('<!--react-ssr-outlet-->', reactSSR)
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('website is listening at port 3000...'));