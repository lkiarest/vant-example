/**
 * 全局唯一 store，做状态共享
 */

// 应用状态
const state = {
    showFooter: true, // 是否显示底部 tab 列表
    pageTitle: '首页', // 页面头部显示的标题
}

// 状态变更函数
const mutations = {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    SHOW_FOOTER (state, bShow) {
        state.showFooter = bShow
    },
    PAGE_TITLE (state, title) {
        state.pageTitle = title
    }
}

export default new Vuex.Store({
    state,
    mutations
})
