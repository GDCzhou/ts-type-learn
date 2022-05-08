type MyAwaited<T extends Promise<unknown>> = 
  T extends Promise<infer X>
    ? X extends Promise<unknown>
      ?MyAwaited<X>
      :X
    : never

//infer x 表示待推断的类型 X
//unknown 表示是未知的类型，比any更为安全
//递归