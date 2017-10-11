/**
 * @module service 示例
 * axios 用法请参考 https://github.com/mzabriskie/axios
 */
import {devMode} from 'utils/env'
import http from 'utils/http'
import api from 'api'

export const getCurrentUser = async () => {
    if (devMode) {
        return {name: '111'} // 测试用户
    } else {
        return http.get(api.USER_INFO)
    }
}
