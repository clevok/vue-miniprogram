实现 vue3 composition

0. box对象
1. ref对象
2. reactive对象
3. computed对象
4. watch方法(待定)
5. watchEffect方法

区别在于, 为了避免 数据共享(按引用值) 的坑, ref和reactive都是不可变对象
必须通过 effect包装才能更改响应式对象的值

```js
const list = reactive([])
const user = box(false)

// 这样无法修改list变量
list.push({name: 'along'})

const onAdd = action(() => {
    list.push({name: 'along'})
})

onLoad(action.flow(function *() {

}))

```

### action
所有更改`响应式对象`的值,都必须在`action`方法中执行,注意,`action`只能是同步方法
为什么

1. 不支持Proxy,Object.definePrototype有无法解决的问题
2. 实现 不可变数据
3. 这样成本最低, 就是单纯的脏检查