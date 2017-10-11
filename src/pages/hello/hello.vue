<template>
    <div>
        <div class='header'>
            我的商城
        </div>
        <van-row class='prods'>
            <van-col :span='24'>
                <van-card
                  v-for='prod in prods'
                  :title="prod.name"
                  :desc="prod.desc"
                  :num="prod.num"
                  :price="prod.price"
                  :thumb="prod.thumb"
                />
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import VanImportor from 'components/vanImportor'
    import {Card} from 'vant'

    VanImportor.importBaseComps() // 导入常用基础组件

    export default {
        data: () => ({
            prods: [{
                name: '商品1',
                desc: '商品描述',
                num: 2,
                price: '2.00',
                thumb: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
            }, {
                name: '商品2',
                desc: '商品描述',
                num: 3,
                price: '11.00',
                thumb: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
            }]
        }),
        components: {
            [Card.name]: Card
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
