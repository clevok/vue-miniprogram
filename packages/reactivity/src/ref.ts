export interface Ref<T = any> {
	value: T
}

export function isRef<T> (r: Ref<T> | unknown): r is Ref<T>
export function isRef (r: any): r is Ref{
	return r ? r.__v_isRef === true : false
}

export function ref<T extends Object> (value: T): Ref<T>{
	return ''
}

function createRef (rawValue: unknown){
	if (isRef(rawValue)) {
		return rawValue
	}
	const r = {
		__v_isRef: true,
		get value () {
			track(r, TrackOpTypes.GET, 'value')
			return value
		},
		set value (newVal) {
			
		}
	}
}
