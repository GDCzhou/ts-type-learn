type Length<T extends readonly any[]> = T['length']

function len(array) {
  if (!Array.isArray(array)) return
  const aLength = array.length
  return aLength
}

//Tuple 类型是另一种 Array 类型，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型。
//https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
type arr = string[]
// 普通数组length返回number类型
type t3 = arr['length']  //number

type tupleArray = [string,number]
//tuple length是固定的数字
type t4 = tupleArray['length']//2