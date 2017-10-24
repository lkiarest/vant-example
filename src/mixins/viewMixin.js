export default {
    methods: {
        setTitle (title) { // 设置页面标题
            this.$store.commit('PAGE_TITLE', title)
        },
        toggleFooter (bShow) { // 显示、隐藏底部 tab 菜单
            this.$store.commit('SHOW_FOOTER', bShow)
        }
    }
}
