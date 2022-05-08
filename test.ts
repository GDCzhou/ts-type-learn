const colors = {
  red: "red",
  blue: "blue",
};

// typeof 转化成ts类型 keyof 转化成unio类型
type Colors = keyof typeof colors
let color:Colors

color = 'blue'

//转化成字面量
const foo = 'hello'
let bar: typeof foo
bar = 11
bar='hello'

// unknown 指的是不可预先定义的类型,可以代替any
const num:number = 10;
//强制转化成string
(num as unknown as string).split('')

//unknow 不可以调用任务方法，但是any可以
const foo1:unknown = {}
foo.a() //类型“"hello"”上不存在属性“a”

const bar1:any = {}
bar1.a() //ok

//避免使用 any 作为函数的参数类型而导致的静态类型检查 bug
function test(input: unknown/**any*/):number {
  if (Array.isArray(input)) {
    return input.length //类型守卫已经将input识别为array类型
  }
  return input //any不会报错