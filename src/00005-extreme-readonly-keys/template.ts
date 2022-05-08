// 1.拿出key
// 2.比对key是不是readonly

import { Equal } from '@type-challenges/utils'

export type GetReadonlyKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? K
    : never
  : never

// export type ReadonlyKeys<T extends object> = {
//   [P in keyof T]-?: IfEquals<
//     { [Q in P]: T[P] },
//     { -readonly [Q in P]: T[P] },
//     never,
//     P
//   >
// }[keyof T]
// type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
//   T
// >() => T extends Y ? 1 : 2
//   ? A
//   : B

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}
type g = Equal<'title' | 'description', GetReadonlyKeys<Todo2>>

type j = GetReadonlyKeys<Todo2>

function getReadonly(U) {
  const obj = {}
  for (const key in U) {
    if (key.includes('readonly')) {
      obj[key] = U[key]
    }
  }
  return obj
}

type G = [1, 2, 3, 4]
type a = keyof G

let b: a = 1
