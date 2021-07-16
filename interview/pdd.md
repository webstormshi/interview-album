### 拼多多
#### 一面
- 埋点上报怎么手机代码中异步处理的报错？
- 简单介绍下flex弹性布局，flex的三个属性分别表示什么？
- 浏览器的js事件循环机制？
```
// 代码块
```
- 函数的防抖和节流的原理是什么？
- onload和contentloaded的区别是什么？
- 怎么监听页面上的js执行报错？
- 大屏自适应怎么处理？
- react-intl国际化的原理是什么？
- 实现一个数组拍平的函数？
- async和await的区别是什么？分别使用在什么场景？
```
// 实现一个 flat 函数，函数的作用是可以拍平一个数组，如 flat([1, [2, [3,4], [5]]]) = [1,2,3,4,5]
function flat(arr) {
    var list = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            list.push(arr[i]);
        } else {
            list = list.concat(flat(arr[i]));
        }
    }
    return list;
}
```
#### 二面
- 编程题： 实现一个链表的反转？
```
// 1 -> 2 -> 3 -> 4 -> 5
// 反转: 5 -> 4 -> 3 -> 2 -> 1
function reverseNodeList(node) {
        let prev = null;
        let cur = node;

        while (cur !== null) {
            const next = cur.next;
            cur.next = prev === null ? null : prev;
            prev = cur;
            cur = next;
        }

        return prev;
    }
```
- 编程题： 实现一个递归回文子串的判断？
```
// "abcba"  true
// "asfssfde"  false
function isTraceStr1(str) {
    var start = 0;
    var end = str.split('').length - 1;

    if (str.split("").length <= 2 && str[start] === str[end]) {
        return 1;
    }

    if (str[start] === str[end]) {
        return isTraceStr1(str.slice(1, end));
    }

    return 0;
}
```
- 项目细节