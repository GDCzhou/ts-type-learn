// type MyReadonly<T> = any

function readonly(obj) {
  const result = {}
  for (const key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}


// 1.返回一个对象
// 2.遍历
// 3.加上readonly关键字
// 4.通过key获取obj的值

type MyReadonly<T> = {
 readonly [P in keyof T] : T[P]
}

interface Todo {
  a:string
  b:string
}

type a = keyof Todo