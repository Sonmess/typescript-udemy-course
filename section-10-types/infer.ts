function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnType<T> = T extends (...args: any) => infer R ? R : T;
type AddFnReturnType = ReturnType<AddFn>;