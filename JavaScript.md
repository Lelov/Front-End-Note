# 1.数据类型
- 数据类型分为基本数据类型(和其他数据类型
- 基本数据类型：`String`,`Number`,`Boolean`,`Undefined`,`Null`,`Symbol`
- 其它(复杂)数据类型：`Object`
# 1.1 typeof
`typeof`操作符用来操作一个变量/表达式的数据类型
通常结果包含以下：`string`,`number`,`boolean`,`undefined`,`symbol`,`object`,`function`
ps: 1. 当判断`null`类型会错误的返回`object`
2. `function`是由于函数在`JavaScript`地位非常重要而才会有这一结果,而其他引用类型无法使用typeof操作符做出判断
# 1.2 数据类型转换
由于`JavaScript`是`弱类型语言`在变量计算过程中会根据条件自动触发`隐式类型转换`，包含以下几种情况：
- 字符串拼接：该变量首先会自动调用`toString()`方法然后再与字符串进行拼接
ps: `toString()`返回表示该对象的字符串
- 与数字发生乘除：首先测试变量的值是否可以转换为有效的数字，如果可以则进行计算，否则返回`NaN`
- 特殊情况：当`number`与`boolean`发生数学运算或逻辑判断时：`true`会转换为`数字1`，'false'会转换为`数字0`，再进行运算
# 逻辑判断中的类型转换
首先做几点说明
1. 基本数据类型比较的是值是否相等而`object`类型比较的的是`内存地址是否相等`
2. == 与 === 的区别
`==`：根据变量的`值`是否相等而返回结果
`===`: 根据变量的`值`与变量的`数据类型`是否相等而返回结果
所以往下只讨论 `==` 的情况

3. 在逻辑运算中任何变量的值或者表达式的结果都会转化为布尔类型的值
#常见的转换
- `0`: `fasle`
- `''(空字符串)`：`false`
- `Boolean`类型: 与数字比较时`true`--> 1,`false`--> 0，其它为正常`true`与`false`
- `String`: 转换为对应的`Unicode编码`
- null == undenfined // true
4. 如何判断是否为数组
```
const arr = []
Array.isArray(arr)    // true
arr instanceof Array  // true
```