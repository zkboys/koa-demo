const path = require('path');
const Koa = require('koa');
const koaBody = require('koa-body');
const render = require('koa-ejs');
const routes = require('./routes');

const app = new Koa();

render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'layout',
    viewExt: 'ejs',
    cache: false,
    debug: false,
});

app
    .use(koaBody({
        jsonLimit: '1kb',
    }))
    .use(routes);

app.listen(8080);
