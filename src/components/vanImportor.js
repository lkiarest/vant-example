/**
 * 组件导入辅助工具，目前只导入大部分子页面用到的共同组件，
 * 其余特定组件还是通过各个页面自行导入，实现按需加载
 */
import {Row, Col, Button, NavBar} from 'vant'

export default {
    importBaseComps () {
        Vue.component(Row.name, Row)
        Vue.component(Col.name, Col)
        Vue.component(Button.name, Button)
        Vue.component(NavBar.name, NavBar)
    }
}
