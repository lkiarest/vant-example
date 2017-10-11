<template>
    <div class='mask'>
        <div class="dialog">
            <div class="header">{{title}}</div>
            <div class="input">
                <textarea v-model='value' :placeholder='placeholder' :maxlength='maxlength'></textarea>
            </div>
            <div class="opts">
                <div class="opt cancel" @click='cancel'>取消</div>
                <div class="opt confirm" @click='confirm'>确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            placeholder: String,
            maxlength: Number,
            value: String
        },
        methods: {
            cancel () {
                this.$emit('cancel')
            },
            confirm () {
                this.$emit('confirm', this.value)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../statics/style/common.less';

    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;

        .dialog {
            width: 13.5rem;
            background-color: #fff;
            border-radius: 0.6rem;
        }

        .header {
            margin: 0 0.75rem;
            text-align: center;
            padding: 0.6rem 0 0.5rem 0;

            .title {
                font-family: PingFangSC-Medium;
                font-size: 0.85rem;
                color: #030303;
                letter-spacing: -0.0205rem;
            }
        }

        .opts {
            width: 100%;
            display: flex;

            .opt {
                height: 2.2rem;
                line-height: 2.2rem;
                text-align: center;
                letter-spacing: -0.0205rem;
                font-size: 0.85rem;
                flex: 1;
                .thin-line-top(#eee);

                &.cancel {
                    color: #999;
                }

                &.confirm {
                    color: #fff;
                    background-color: #52C7CA;
                }
            }
        }

        .input {
            margin: 0 0.75rem 0.5rem;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 200%;
                height: 200%;
                transform: scale(0.5);
                transform-origin: 0 0;
                box-sizing: border-box;
                pointer-events: none;
                border: 1px solid #eee;
                border-radius: 0.4rem;
            }

            textarea {
                padding: 0.5rem 0.6rem;
                width: e("calc(100% - 1.2rem)");
                height: 5.0rem;
                outline: none;
                border: none;
                resize: none;
                font-size: 0.7rem;
                color: #333333;
                line-height: 1.0rem;
            }
        }

    }
</style>
