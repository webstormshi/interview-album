### BTCEX
1. 用过哪些布局，flex布局中flex属性的第二个值是什么作用？
```
.parent {
  display: flex;
}
.child {
  flex: 1 300px;
}
```
3. `react` 16版本引入的`react hooks`, 有什么优缺点，解决了什么问题？
是否遇到过什么坑？
```
```
4. react更新阶段的生命周期执行顺序？
```
16.4以后：getDeriveStateFromProps -> shouldComponentUpdate -> getSnapshotBeforeUpdate -> render -> componentDidUpdate
16.3以前：get
5. 组件卸载阶段需要做哪些事情？
```
清除定时器，解除事件监听...
```
6. react中状态更新`setState`是同步还是异步的？
```
```
7. http网络协议的，get和post请求的区别是什么？
```
get: 请求参数通过url传递
post: 请求参数也可以放在url上，一般放在请求体中
```
8. get请求会被浏览器缓存，缓存机制是什么？怎么避免浏览器从缓存中拿请求数据？
```
用url作为key缓存的
```
9. http请求状态码`305`,`503`表示什么意思？
```
305: 只能通过代理访问的接口，不允许浏览器直接请求接口访问？
503: 服务端过载，临时故障？
```
10. javascript的事件传播？
11. 怎么禁止浏览器事件的捕获和冒泡？
```
禁止冒泡：
禁止捕获：
```
12. 怎么解决`class component`中怎么解决`this`指向的问题？
```
```
13. 箭头函数和普通函数的区别是什么？
```
箭头函数：
普通函数：
``` 