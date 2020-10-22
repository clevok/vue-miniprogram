import { observable, computed, autorun, extendObservable, action } from 'mobx'

const user = observable({ name: 'along' })
autorun(() => {
	console.log('user改变', user.name)
})

const age = computed(() => {
	// @ts-ignore
	return user.name + '：hahah' + (user.age || '0')
})

setTimeout(
	action(() => {
        user.name = '442'
        console.log(age.get())
	}),
	1000
)

console.log(age.get())
