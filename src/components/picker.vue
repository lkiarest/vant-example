<template>
    <div>
        <div class="label" :class='labelCls' @click='onclick'>{{displayValue}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            value: String,
            placeholder: String,
            readonly: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            displayValue () {
                return this.value || this.placeholder
            },
            labelCls () {
                return {
                    empty: !this.value,
                    editable: !this.readonly
                }
            }
        },
        methods: {
            onclick () {
                (!this.readonly) && this.$emit('click')
            }
        }
    }
</script>

<style scoped lang="less">
    .label {
        font-size: 0.85rem;
        color: #333;
        letter-spacing: 0;
        font-family: PingFangSC-Medium;

        &.empty {
            color: #999;
            font-family: PingFangSC-Regular;
        }

        &.editable:after {
            font-family: 'iconMobile';
            content: '\e620';
            font-size: 0.6rem;
            color: #BDC0C5;
            vertical-align: middle;
        }
    }
</style>
