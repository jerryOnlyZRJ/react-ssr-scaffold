import Router from 'koa-router'
const router = new Router();

router.get('/user', async (ctx) => {
    ctx.body = {
        username: "Ranjay"
    }
});

export default router