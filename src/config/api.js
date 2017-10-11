/**
 * backend apis
 */
import {devMode} from 'utils/env'
const DEFAULT_API_BASE = devMode ? '//next.wisedu.com:8013/v3' : '//www.cpdaily.com/v3'

const _dataPath = (url) => {
    return `${DEFAULT_API_BASE}/emall/${url}`
}

export default {
    USER_INFO: _dataPath('user')
}
