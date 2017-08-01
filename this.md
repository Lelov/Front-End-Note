## this
`this`在代码执行时用于指代的当前对象,无法在定义时确认
通常分为以下几种情况
- 在构造函数中执行    --> 实例化后的对象
- 在普通函数中执行    --> 指向`window`,`es6`指向`undefined`
- 作为对象属性来执行  --> 当前对象
- call,apply,bind     -->  
### 1. 在构造函数中执行


### call,apply,bind

#### call与apply
在调用函数时根据参数改变this的指向
语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]]) 
语法：apply([thisObj[,argArray]]) 
```
// 定义函数
function fn(name,age){
  console.log(this)
}

fn.call({name1: '1son'},name)  // Object {name1: "1son"}
```

#### bind
在函数表达式声明时在末尾使用`bind`改变`this`指向
const fn = function(){
    console.log(this)
}.bind({obj:233})

fn()   // Object {obj:233}
