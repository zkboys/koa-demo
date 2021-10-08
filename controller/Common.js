module.exports = class UserController {

    /**
     * 首页
     * @param ctx
     * @param next
     */
    static async index(ctx, next) {
        await ctx.render('index');
    }

    /**
     * 登录
     * @param ctx
     * @param next
     */
    static login(ctx, next) {
        ctx.body = {
            message: '登录成功！',
            code: 0,
            data: {
                token: 'test',
            },
        };
    }

    /**
     * 退出登录
     * @param ctx
     * @param next
     */
    static logout(ctx, next) {
        ctx.body = {
            message: '退出登录成功！',
            code: 0,
        };
    }
};
