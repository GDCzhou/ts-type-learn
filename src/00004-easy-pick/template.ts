type MyPick<T, K extends keyof T> = {
  [P in  K]: T[P]
}

function pick(T,K) {
  const obj = {}
  for (const key in K) {
    for (const Tkey in T) {
      if (key === Tkey) {
        obj[key] = T[key]
      }
    }
  }

  return obj
}