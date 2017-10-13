<template>
    <div class='tab-footer'>
        <div v-for='tab in tabs' :key='tab.id' class="tab" :class='{"active": value === tab}' @click='select(tab)'>
            <div class='tab_icon' :class='tab.iconCls'></div>
            <div class="tab_label">{{tab.label}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: Object,
            tabs: {
                type: Array,
                required: true
            }
        },
        methods: {
            select (tab) {
                this.$router.replace(tab.route)
                this.$emit('input', tab)
            },
            updateMenu (path) {
                const tabs = this.tabs
                // 根据 url 设置当前菜单
                for (let i = 0, len = tabs.length; i < len; i++) {
                    const tab = tabs[i]
                    if (tab.route === path) {
                        this.select(tab)
                        break
                    }
                }
            }
        },
        created () {
            this.updateMenu(this.$route.path)

            this.$router.afterEach((to, from) => {
                this.updateMenu(to.path)
            })
        }
    }
</script>

<style type="text/css" lang="less">
    .tab-footer {
        width: 100%;
        left: 0;
        bottom: 0;
        display: flex;
        position: absolute;
        border-top: 1px solid #eee;

        .tab {
            text-align: center;
            flex: 1;
            font-size: 0;

            &.active {
                .tab_label {
                    color: #333;
                }
            }

            .tab_icon {
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.1rem;
                display: inline-block;
                background-color: #eee;
            }

            .tab_label {
                margin: 0.1rem 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #999;
                font-size: 0.7rem;
            }
        }
    }
</style>
