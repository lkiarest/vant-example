// polyfills
require('es6-promise').polyfill()
require('utils/polyfills')
require('assets/less/main.less')

import {load as loadConf} from 'conf/global'
import router from 'router'
import routes from 'src/pages/emall/routes'
// import index from 'src/pages/emall/emall';

// 启用 vue 开发者工具
if (process.env.NODE_ENV === 'development') {
    Vue.config.devtools = true
}

loadConf().then(function(userInfo) {
    router(routes, '#app')
}).catch(e => {
    console.error(e.message)
})
