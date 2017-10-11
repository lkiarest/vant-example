import {getConf} from 'services/config.service'
import {getCurrentUser} from 'services/user.service'

let conf = {}

export const load = () => {
    return getConf().then(data => {
        Object.assign(conf, data)
        return conf
    }).then(getCurrentUser).then(data => {
        Object.assign(conf, {user: data})
        return conf
    })
}

export const get = () => {
    return conf
}
