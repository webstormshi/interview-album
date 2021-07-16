### 掌门1对1【上海】
#### 一面
1. 实现一个左侧定宽侧边栏，右边头部定高导航，剩余部分撑满超出滚动的布局结构？
```
<div class="root">
  <div class="left"></div>
  <div class="right">
    <div class="header"></div>
    <div class="content"></div>
  </div>
</div>
```
2. 事件循环的基本原理？
```
```
3. 请说明下面代码的打印顺序是什么？
```
function fn() {
  console.log(2);
};

(async function() {
  await fn();
  console.log(1);
})();

console.log(3);
```
4. `protototype`和`__proto__`的基本用法？下面哪个写法会报错？
```
const A = { name() {} };
const B = function() { name() {} };

A.name1 = { name1() {} };
A.prototype.name2 = { name2() {} };
A.__proto__.name3 = { name3() {} };

B.name1 = { name1() {} };
B.prototype.name2 = { name2() {} };
B.__proto__.name3 = { name3() {} };
```
5. `react hooks`使用可以在定义之前吗？
```
const [A, setA] = useState();

useEffect(() => {
  // 1. 当这里面用到了setA方法，是否需要将setA加入到deps
  // 2. 当这里面用到了fn方法，是否需要将fn加入到deps
}, [deps]);

// 3. fn的定义放在定义之前是否会把报错
const fn = useCallback(() => ({}), [deps]);

```
6. 简单介绍下react filber的基本原理？
```
```
7. 给出一个字符串， 打印出各个字符串以及对应的出现次数？
```
输入："abacbabbca"
输出：a => 4, b => 4, c => 2
```
8. 给出一个数组，打印出所有可能的全排列顺序？
```
输入：[1,2,3]
输出：[1,2,3], [2,1,3], [2,3,1], [1,3,2], [3,1,2],[3,2,1]
```
9. `react fiber`的`reconcilition/commit`阶段的更新遍历顺序为什么是DFS，而不是BFS?

#### 二面
1. git bash怎么检出一条新分支？
2. `git pull`和`git rebase`的用法和区别？
3. `git stash`的两个参数表示什么？`git stash` 前后会出现什么变化？怎样实现`git stash pop`但是stash list不pop出最近的`stash`;
4. SSR的基本原理是什么？
5. redux的数据流程怎样的，reducer怎么查找匹配action的?
6. webpack配置过哪些plugin和loader？
7. 项目中为什么要使用redux saga? 不用saga的话可以用那些其他中间件？
8. 简单描述下http网络协议？
9. 用过es6的哪些新特性？
10. 页面上的请求经常会有的发两次，这是什么原因？
11. 请说出跨域的几种当时，ng代理怎么配置，proxy代理的底层实现是什么？
12. react渲染和dom操作最本质的区别是什么？react为什么高效？
13. 高性能实现一个10*10的表格布局，适配移动，pc，pad各个终端？
14. 基于13的10x10表格，添加一个按钮，点击给每个表格填充一种不同的颜色，用react怎么实现， div的用索引还是颜色值作为key，为什么？