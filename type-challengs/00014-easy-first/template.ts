// type First<T extends any[]> = any

function first(arr) {
  const [f, ...rest] = arr
  return f
  return arr[0]
}

// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T['length'] extends 0 ? never :T[0]
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never
// const a:First = [undefined,undefined]
