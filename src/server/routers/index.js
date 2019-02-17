import Router from 'koa-router'
import apiRouter from './api'
import next from '../utils/next'
import IndexRoute from "@/routers/IndexRoute/IndexRoute";

const router = new Router();

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())

router.get('*', async (ctx) => {
    ctx.body = await next.render(ctx, IndexRoute)
});

export default router