<template>
    <div class='cell' :class='{"vertical": vertical}'>
        <div v-if='label' class="label" :style='styleObj' v-html='label'></div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            width: {
                type: [Number, String],
                default: 100
            },
            vertical: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            styleObj () {
                let width = this.width
                if (typeof width === 'number') {
                    width = width + 'px'
                }

                return {width}
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../statics/style/common.less';

    .cell {
        background: #fff;
        display: flex;
        overflow: hidden;
        padding: 0 1.0rem;
        .thin-line-bottom(#E8E8E8);

        &.vertical {
            flex-direction: column;
        }

        .label {
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: 0.85rem;
            color: #333333;
            letter-spacing: 0;
        }

        .content {
            flex: 1;
        }
    }
</style>
