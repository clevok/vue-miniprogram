import { freeze } from '../src/index'

const a = freeze({ name: 'along', extend: { name: 'along1' } })

a.name = '1545'
a.extend.name = '4565'
console.log(a)

