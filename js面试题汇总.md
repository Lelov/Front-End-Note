1. 何时使用 === 和 ==
```
// 判断 obj 对象的a是否存储时
if(obj.a == null){
  // 这里相当于 obj.a === null || onj.a === undefined
  // jquery源码推荐写法时
}
```
其他一律用 `===`

2. typeof 的结果
`string`,`number`,`boolean`,`bull`,`object`,`function`,`symbol`

3. js按照存储类型区分变量类型，并描述特点
可分为`值类型`与`引用类型`其特点：`值类型`是赋值时按值引用，值是不可变的，不可添加属性，保存在栈内存
而`引用类型`的赋值是一个变量指针的赋值，可添加属性，同时保存在栈内存和堆内存中的对象

4. 如何理解JSON
`json`是`JavaScript`的一个对象，也是一种数据格式，常用API有`JSON.parse(jsonObj)`(将JSON字符串解析为JSON对象)，`JSON.stringfy(obj)`(将JSON对象序列化为JSON字符串)
