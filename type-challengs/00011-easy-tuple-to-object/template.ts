// type TupleToObject<T extends readonly any[]> = any

//衍射成字面量类型，不允许修改
let a = ['1', '2', '3', '4'] as const
//转化成ts类型，字面量类型
type r = typeof a //readonly ["1", "2", "3", "4"]

function tupleToObject(array) {
  const obj = {}
  array.forEach((val) => {
    if (typeof val !== 'string' || 'number' || 'sy') obj[val] = val
  })

  return obj
}

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

//1.返回一个对象
//2. 字面量类型
//3. T[number]
