import path from 'path'
import 'babel-polyfill'
import Koa from 'koa'
import assets from "koa-static" 
import CONFIG from "../config"
import router from './routers'

const app = new Koa();

app.use(assets(path.resolve(process.cwd(), 'dist/client')))

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(CONFIG.port, () => console.log(`website is listening at port ${CONFIG.port}...`));