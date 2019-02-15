import path from 'path'
import 'babel-polyfill'
import Koa from 'koa'
import assets from "koa-static";
import Router from 'koa-router'
import next from './utils/next.js'

const app = new Koa();
const router = new Router();

app.use(assets(path.resolve(process.cwd(), 'dist/client')))

router.get('*', async (ctx) => {
  ctx.body = await next.render(ctx)
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => console.log('website is listening at port 3000...'));