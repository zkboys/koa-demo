const Router = require('koa-router');
const router = new Router();
const User = require('../controller/User');
const Common = require('../controller/Common');

router
    .get('/', Common.index)
    .get('/login', Common.login)
    .get('/logout', Common.logout)
    .get('/users', User.getUsers)
    .get('/users/:id', User.getUser)
    .post('/users', User.addUser)
    .put('/users/:id', User.updateUser)
    .del('/users/:id', User.delUser);

module.exports = router.routes();
