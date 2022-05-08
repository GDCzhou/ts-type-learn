type MyOmit<T,U extends keyof T> = {
  [P in Exclude<keyof T,U>] : T[P]
}


function omit(T,U) {
  const obj = {}
  for (const key in T) {
    for (const key1 in U) {
      if (key !== key1) {
        obj[key] = T[key]
      }
    }
  }
  return obj
}