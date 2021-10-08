module.exports = class UserController {

    /**
     * 获取多个用户
     * @param ctx
     * @param next
     */
    static getUsers(ctx, next) {
        // /users?name=张&age=23
        const {name, age} = ctx.query;
        console.log(name, age);

        ctx.body = {
            message: 'OK',
            code: 0,
            data: [
                {id: 1, name: '张三', age: 23},
                {id: 2, name: '李四', age: 24},
                {id: 3, name: '王五', age: 25},
            ],
        };
    }

    /**
     * 获取单个用户
     * @param ctx
     * @param next
     */
    static getUser(ctx, next) {
        // /users/:id --> /users/1
        const {id} = ctx.params;
        console.log(id);

        ctx.body = {
            message: 'OK',
            code: 0,
            data: {
                id: 1,
                name: '张三',
                age: 23,
            },
        };
    }

    /**
     * 删除用户
     * @param ctx
     * @param next
     */
    static delUser(ctx, next) {
        const {id} = ctx.params;
        console.log(id);
        ctx.body = {
            message: '删除成功！',
            code: 0,
        };
    }

    /**
     * 修改用户
     * @param ctx
     * @param next
     */
    static updateUser(ctx, next) {
        console.log(ctx.request.body);
        ctx.body = {
            message: '修改成功！',
            code: 0,
        };
    }

    /**
     * 添加用户
     * @param ctx
     * @param next
     */
    static addUser(ctx, next) {
        console.log(ctx.request.body);
        ctx.body = {
            message: '添加成功！',
            code: 0,
        };
    }
};
