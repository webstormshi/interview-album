### 美团一面
- `_proto_`和`prototype`分别是什么？有什么区别？

- node.js怎么解决循环引用的问题？

- 下面的等式成立吗？
```
0.1 + 0.2 === 0.3
```

- es6中新增的数据类型有哪些？ `Symbol`类型一般在什么情况下用的？

- es6的模块化和`commonJS`有什么区别和联系？

- `useState`的源码有看过吗？怎么实现的？

- webpack的热更新原理是什么？怎么实现修改保存后页面自动刷新？

- webpack打包编译时间优化怎么做的？

- 简单讲下js的事件循环？

- 进程和线程有什么区别？

- 状态码`401`和`403`分别什么意思？有什么区别？
```
https://www.cnblogs.com/adroitwolf/p/14309570.html
```
- 手写promise.all
```
Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        promises.forEach((promise, index) => {
            promise.then(res => {
                results[index] = res;
                if(results.length === promises.length) {
                    resolve(results);
                }
            }, error => {
                reject(error);
            })
        });
    });
}
```