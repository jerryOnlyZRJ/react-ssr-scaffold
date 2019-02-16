import path from 'path'
import 'babel-polyfill'
import Koa from 'koa'
import assets from "koa-static" 
import router from './routers'

const app = new Koa();

app.use(assets(path.resolve(process.cwd(), 'dist/client')))

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('website is listening at port 3000...'));