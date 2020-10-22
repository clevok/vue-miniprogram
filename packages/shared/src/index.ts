import clonedeep from 'lodash.clonedeep'

const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (val: object, key: string | symbol): key is keyof typeof val =>
	hasOwnProperty.call(val, key)

export const isArray = Array.isArray
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isObject = (val: unknown): val is Record<any, any> =>
	val !== null && typeof val === 'object'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
	return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function freeze<T extends Object> (value: T){
	if (!isObject(value)) {
		return value
    }

    value = clonedeep(value)

    Object.keys(value).forEach(key => {
        value[key] = freeze(value[key])
    })

    return value
}
