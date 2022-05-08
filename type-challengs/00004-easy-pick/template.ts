// type MyPick<T, K> = any
// keyof会把T转化成一个联合类型数组
// extends进行约束
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

//js
function mypick(todo, keys) {
  const obj = {}
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}

//1. 返回一个对象
//2. 遍历
// 3. todo[key]取值
// 4. 检测key存不存在todo
