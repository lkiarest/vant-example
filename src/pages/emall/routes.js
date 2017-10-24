/**
 * 页面内路由定义
 */
const emall = resolve => require(['./emall'], resolve)
const home = resolve => require(['./home/home'], resolve)
const my = resolve => require(['./my/my'], resolve)
const prods = resolve => require(['./prods/prods'], resolve)
const cart = resolve => require(['./cart/cart'], resolve)

export default [
    {
        path: '/',
        component: emall,
        meta: {title: '象牙宝'},
        children: [{
            path: 'my',
            component: my,
            meta: {title: '个人中心'}
        }, {
            path: 'prods', // 默认路由到 home 页面
            component: prods,
            meta: {title: '分类'}
        }, {
            path: 'cart', // 默认路由到 home 页面
            component: cart,
            meta: {title: '购物车'}
        }, {
            path: '', // 默认路由到 home 页面
            component: home,
            meta: {title: '首页'}
        }]
    }
]
