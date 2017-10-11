import http from 'utils/http'

const confPath = 'statics/global.conf.json'
// let confPath = '../statics/global.conf.json' // 多页面需要调整为此路径

let cached = null
const timestamp = new Date().getTime()

export const getConf = () => {
    if (cached) {
        return Promise.resolve(cached)
    }

    return http.getJson(`${confPath}?_t=${timestamp}`).then(data => {
        cached = data
        return data
    })
}
