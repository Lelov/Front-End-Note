## 1. Ajax
`Ajax`是`Asynchronous Javascript And XML`(异步的JavaScript和XML的缩写)，它是网络请求中使用异步编程实现的一种技术方案，主要依赖`XMLHttpRequest`对象的API。(低版本ie通过Active('Microsoft.XMLHTTP')获取)
## 2. XMLHttpRequest
`XMLHttpRequest`是一个`Web API`,它提供在不会刷新页面前提下让`客户端`与`服务器端`的数据进行交互，其[标准](https://xhr.spec.whatwg.org)允许
```
- 在服务器允许的情况下，发送跨域请求
- 发送和获取数据时，获取进度信息
- 设置请求超时时间
- 发送和接收二进制数据
- `FormData`管理表单数据及上传文件
```
通过`XMLHttpRequest()`构造函数来操作`XMLHttpRequest`提供的`API`
```
const xhr = new XMLHttpRequest()
```

#### 2.1 属性
```
-  readyState: 表示XMLHttpRequest的状态码
      0: 初始化状态
      1: 调用 open 方法
      2: 调用 send 方法
      3: 等待接受服务器返回的数据
      4: 主要关注的信息，成功接受数据并可使用
- status： http状态码(注意不要在readyState小于3的情况下读取该属性)
      2xx:  成功处理请求，200(主要关注)
      3xx： 重定向，浏览器地址发生改变
      4xx： 客户端请求错误,404
      5xx： 服务器错误，505
- statusText：   状态码文本信息
- responseText： 服务器返回的文本数据
- responseType:  请求的响应类型，常见的有json,text,docuemnt等，默认为空字符串
- timeout：设置请求最大超时事件，默认值为 0，即没有不处理超时问题
```
#### 2.2 方法
```
- abort: 该方法会阻止请求，同时readyState会执为0，但不会触发readystatechange事件
- setRequestHeader： 设置请求头信息
- getResponseheader： 获取响应体的头信息
- open(methods,url,boolean，user，password)：打开一个请求
    methods:请求类型，如get/post
    url：请求资源的地址
    boolean：可选，布尔值，默认true，是否使用异步发送请求
    user：可选，默认为空字符串，授权的用户名
    password：可选，默认为空字符串，授权的用户名
- send：发送请求，异步立即返回，而同步必须等到接受到响应后才会返回
```

#### 2.3 事件
```
- readystatechange: 用于监听state状态码的改变
- prgress：该事件会在浏览器接受数据区间反复执行，它包含以下属性
    lengthComputable：进度信息是否可用
    position：表示接受到数据的字节数
    totalSize：表示预期的数据总字节数
- error：发生错误时触发
- abort：调用abort()方法时触发
- loadstart：ajax请求开始时触发
- load：接受完整数据后触发
- timeout：当请求超时时触发(在open与send之间设置该属性)
```

简单的ajax请求封装(不考虑低版本ie)
```
// es5
function ajax(url, methods, fn){
  // 获取XMLHttpRequest对象
  var xhr = new XMLHttpRequest()
  // 监听 readyState 的变化
  xhr.onreaystatechange = fucntion(){
    // 关注 readyState 为4 及http响应码为 200 的情况
    if( xhr.readyState === 4 && xhr.status === 200){
      // 成功获取服务器返回的数据
      fn && fn(xhr.responseText)
    }
  }

  // 打开请求
  xhr.open(methods, url)
  // 发送请求
  xhr.send(null)
}

// 调用
ajax('http://www.sss.com','get',function(res){
  // 对res的处理
})

```
es6使用Promise

function ajax(url, methods = 'get'){
  // 返回Promise实例
  return new Promise((resolve, reject) => {
    // 获取XMLHttpRequest对象
    const xhr = new XMLHttpRequest()
    // 监听 readyState 的变化

    xhr.onreaystatechange = () => {
      // 关注 readyState 为4 及http响应码为 200 的情况
      if( xhr.readyState === 4){
        if( xhr.status === 200 ){
          // 成功获取服务器返回的数据
          resolve(xhr.responseText)
        } else {
          reject(new Error('请求出错了'))
        }
        
      }
    }

    // 打开请求
    xhr.open(methods, url)
    // 发送请求
    xhr.send(null)
  })
}  

// 调用 ajax
ajax(url).then((res) => {
    // 处理请求成功
    console.log(res)
  }).catch((err) => {
    // 处理请求失败
    console.log(err)
  })
```
## 2. 跨域
由于浏览器`同源策略`的限制，所谓`同源`即`协议`，`域名`，`端口号`都相同，比如`http://www.demo.com/page1`与`http://www.demo.com/page1`为`同源`
ps：`http`为网站遵循的协议，常见的`http`(默认端口为80),`https`(默认端口为`443`);`www.demo.com`为域名;端口:跟在域名后边，如：`www.demo.com:80`,通常使用不指定时是跟随遵循的协议的默认端口，常见的`80`，`443`
`ajax`受此策略的影响时，会发生错误跨域错误在说跨域解决方案之前，先说几个`html`标签，它们的`src`属性链接的地址都不受`同源策略`影响:

- 1.    `<img>`: 但在ajax中使用请求`img`地址时有几个缺点：
    1) 只能使用get请求； 
    2) 无法访问服务器返回的响应文本。
- 2.   `<link>`: 常见`CDN`服务就是利用此原理
- 3. `<script>`: `JSONP`的原理


常见解决方案：
1. 使用`<img>`标签请求需要的图片，兼容性好支持ie低版本
2. `<link>`标签请求其他服务器的静态css资源
3. `JSONP`: 得益于<script>的标签不受同源策略影响，即可通过JS代码动态创建`<script>`标签并将其`src`属性指向需要的资源文件地址，来达到目的。在实际使用的时候通常会在`src`中的`url`地址中设定一个参数，服务器端根据参数动态的生成对象的js文件并返回，比如常见的在`url中callback指定具体访问的函数`,或者是网页地址后面跟一个`xxx.html`(比如`http://www.l.com/xxx.html`)，在服务器中可能根本没有该网页，而是根据参数`xxx`来动态生成一个网页，反正根据具体的情况来使用就对了。
  下面是一个`callback`的例子
  请求的数据
  ```
    function handler(data){
      alert('得到的信息' + data)
    }

    const script = document.createElement('script')
    script.src = 'http://www.l.com?callback=handler'
    document.body.appendChild(script)
  ```
4. 使用cors,在服务端设置`http头信息(header)`来制定跨域规则
5. `nginx`反向代理
6. `Web Sockets` 
```
