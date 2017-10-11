<template>
    <div class='search'>
        <div v-if='!typing' class="init" @click.stop='toggleInput'>
            <span>搜索</span>
        </div>
        <div v-else class='typing'>
            <input ref='input' autofocus='autofocus' type="text" v-model='value'>
            <i class='iconMobile icon-search' autofocus></i>
            <div v-if='value' class='icon-clear' @click.stop='clear'></div>
        </div>
    </div>
</template>

<script>
    const CHANGE_DEALY = 300 // 默认延时

    export default {
        data: () => ({
            typing: false, // 是否开始接收用户输入
            value: '',
            timerChange: null
        }),
        props: {
            delay: { // 接收用户输入后延迟执行
                type: Number,
                default: CHANGE_DEALY
            }
        },
        methods: {
            clearTimer () {
                if (this.timerChange) {
                    clearTimeout(this.timerChange)
                    this.timerChange = null
                }
            },
            clear () {
                this.typing = false
                this.value = ''
            },
            toggleInput () {
                this.typing = true
                this.$nextTick(() => this.$refs.input.click())
            }
        },
        watch: {
            value (newVal) {
                this.clearTimer() // 重启定时器

                this.timerChange = setTimeout(() => {
                    this.$emit('input', newVal)
                }, this.delay)
            }
        },
        beforeDestroy () {
            this.clearTimer() // 销毁定时器
        }
    }
</script>

<style scoped lang="less">
    .search {
        height: 1.7rem;
        background: #F6F7F7;
        padding: 0.25rem 1.0rem;

        .init {
            background: #FFFFFF;
            border-radius: 0.2rem;
            width: 100%;
            height: 1.7rem;
            text-align: center;

            span {
                font-size: 0.7rem;
                color: #CCCCCC;
                letter-spacing: 1px;
                line-height: 1.7rem;

                &:before {
                    content: '\e606';
                    font-family: iconMobile;
                    font-size: 0.7rem;
                    color: #ccc;
                    margin-right: 0.4rem;
                    vertical-align: top;
                }
            }
        }

        .typing {
            position: relative;

            input {
                width: e("calc(100% - 3.3rem)");
                line-height: 1.7rem;
                height: 1.7rem;
                background: #FFFFFF;
                border: 0 solid #EEEEEE;
                border-radius: 0.2rem;
                font-size: 0.7rem;
                padding: 0 1.5rem 0 1.8rem;
                outline: none;
                color: #333333;
            }

            .icon-search {
                position: absolute;
                left: 0.7rem;
                top: 0.475rem;
                color: #ccc;
                font-size: 0.7rem;
                border-radius: 1px;
            }

            .icon-clear {
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
                background-color: #eee;
                position: absolute;
                right: 0.7rem;
                top: 50%;
                transform: translateY(-50%);

                &:after {
                    font-family: iconMobile;
                    content: '\e61a';
                    color: #999;
                    font-size: 0.4rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>
