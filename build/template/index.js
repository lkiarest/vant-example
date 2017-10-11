// polyfills
require('es6-promise').polyfill()
require('utils/polyfills')
require('statics/style/main.less')

import {load as loadConf} from 'conf/global'
import router from 'router'
import routes from 'src/pages/[PAGE_NAME]/routes'
// import index from 'src/pages/[PAGE_NAME]/[ENTRY_NAME]';

// 启用 vue 开发者工具
if (process.env.NODE_ENV === 'development') {
    Vue.config.devtools = true
}

loadConf().then(function(userInfo) {
    router(routes, '#app')
}).catch(e => {
    console.error(e.message)
})
