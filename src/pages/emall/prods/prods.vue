<template>
    <div class='home'>
        <van-row class='prods'>
            <van-col :span='24'>
                <van-card
                  v-for='prod in prods'
                  :key='prod.id'
                  :title='prod.name'
                  :desc='prod.desc'
                  :num='prod.num'
                  :price='prod.price'
                  :thumb='prod.thumb'
                />
            </van-col>
        </van-row>
    </div>
</template>

<script>
    import {Card} from 'vant'

    const TEST_PRODS = [{
        id: 1,
        name: '商品1',
        desc: '商品描述',
        num: 2,
        price: '2.00',
        thumb: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }, {
        id: 2,
        name: '商品2',
        desc: '商品描述',
        num: 3,
        price: '11.00',
        thumb: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
    }]

    export default {
        data: () => ({
            prods: TEST_PRODS
        }),
        ready () {
            console.log('prods page')
        },
        components: {
            [Card.name]: Card
        }
    }
</script>

<style scoped lang="less">
    .prods {
        margin-top: 0.5rem;
    }
</style>
