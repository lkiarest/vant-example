<template>
    <div>
        <div class='header'>
            我的商城
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
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

    .main-content {
        height: calc(~"100vh - 4.75rem");
        overflow: hidden;
        transform: translateZ(0);
    }
</style>
