interface IEffect {
	(callback): () => any
	flow: (callbakc) => any
}
const effect: IEffect = () => {}

const userInfo = ref({
	name: 'along',
	age: 17
})

const onLoad = effect.flow(function* (params){
	userInfo.age = 23
})
const onChangeName = effect(() => {})
