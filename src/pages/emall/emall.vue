<template>
    <div :class='cls'>
        <van-nav-bar :title="title" left-arrow @clickLeft='back'/>
        <div class="main-content">
            <router-view></router-view>
        </div>
        <tab-footer v-if='showFooter' :tabs='tabMenus' v-model='currentMenu'></tab-footer>
    </div>
</template>

<script>
    import VanImportor from 'components/vanImportor'
    import VueMixin from 'mixins'
    import TabFooter from 'components/tabFooter'
    import {Card} from 'vant'
    import MENUS from 'conf/menus'
    import store from 'vuex/store'

    VanImportor.importBaseComps() // 导入常用基础组件
    VueMixin.mixin() // 混入通用处理

    export default {
        data: () => ({
            currentMenu: MENUS[0],
            tabMenus: MENUS
        }),
        computed: {
            title () {
                return this.$store.state.pageTitle
            },
            showFooter () {
                return this.$store.state.showFooter
            },
            cls () {
                return {
                    'has-footer': this.showFooter
                }
            }
        },
        methods: {
        },
        created () {
            const title = this.$route.meta.title
            this.setTitle(title)

            this.$router.afterEach((to, from) => {
                this.setTitle(to.meta.title)
            })
        },
        store,
        components: {
            [Card.name]: Card,
            TabFooter
        }
    }
</script>

<style scoped lang="less">
    .main-content {
        height: calc(~"100vh - 2.2rem");
        overflow: hidden;
        transform: translateZ(0);
    }

    .has-footer {
        .main-content {
            height: calc(~"100vh - 4.4rem");
        }
    }
</style>
