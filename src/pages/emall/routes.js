/**
 * 页面内路由定义
 */
const emall = resolve => require(['./emall'], resolve)
const home = resolve => require(['./home/home'], resolve)
const my = resolve => require(['./my/my'], resolve)
const prods = resolve => require(['./prods/prods'], resolve)

export default [
    {
        path: '/',
        component: emall,
        meta: {title: '商城'},
        children: [{
            path: 'my',
            component: my,
            meta: {title: '我的'}
        }, {
            path: 'prods', // 默认路由到 home 页面
            component: prods,
            meta: {title: '商品列表'}
        }, {
            path: '', // 默认路由到 home 页面
            component: home,
            meta: {title: '首页'}
        }]
    }
]
