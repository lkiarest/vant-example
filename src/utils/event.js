/**
 * 跨页面数据、事件传递 [基于 localStorage]
 */
const EVENT_NS = 'CPDAILY__TAKEOFF_ACTION'

/**
 * 创建事件
 */
export const push = (type, data) => {
    if (!type) {
        return
    }

    try {
        localStorage.setItem(EVENT_NS, JSON.stringify({ // 同时只会发出一个事件
            type,
            data: data || {}
        }))
    } catch (e) {}
}

/**
 * 删除事件
 * @param  {String} type 事件类型
 */
export const remove = () => {
    try {
        localStorage.removeItem(EVENT_NS)
    } catch (e) {
        // prevent the error of parse json or localstorage
    }
}

/**
 * 检查是否存在特定类型事件并返回事件 payload
 * @param {String} type 事件类型
 * @param {Boolean} [bRemove=false] 处理完是否删除事件
 */
export const check = (type, bRemove) => {
    if (!type) {
        return null
    }

    try {
        let action = localStorage.getItem(EVENT_NS)

        if (action) {
            action = JSON.parse(action)
            let actionType = action.type

            if (type === actionType) {
                let payload = action.data

                if (bRemove) {
                    localStorage.removeItem(EVENT_NS) // 事件被第一个处理者接收后立即销毁
                }
                return payload
            } else {
                return null
            }
        } else {
            return null
        }
    } catch (e) {
        // prevent the error of parse json or localstorage
        return null
    }
}

export default {push, check, remove}
