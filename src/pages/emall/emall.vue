<template>
    <div>
        <div class='header'>
            我的商城
        </div>
        <router-view></router-view>
        <tab-footer :tabs='tabMenus' v-model='currentMenu'></tab-footer>
    </div>
</template>

<script>
    import VanImportor from 'components/vanImportor'
    import TabFooter from 'components/tabFooter'
    import {Card} from 'vant'
    import MENUS from 'conf/menus'

    VanImportor.importBaseComps() // 导入常用基础组件

    export default {
        data: () => ({
            currentMenu: MENUS[0],
            tabMenus: MENUS
        }),
        methods: {
        },
        components: {
            [Card.name]: Card,
            TabFooter
        }
    }
</script>

<style scoped lang="less">
    .header {
        text-align: center;
        line-height: 2rem;
        background-color: #333;
        color: #fff;
    }

    .prods {
        margin-top: 0.5rem;
    }
</style>
