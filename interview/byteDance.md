### 字节跳动 - 飞书
#### 字节一面
- 编程题
- 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。lengthOfLongestSubstring('babcaacbd') = 4
```
function findSubString(str) {
    var start = 0;
    var subStrLen = 1;
    for (let i = 1; i < str.length + 1; i++) {
        var subStr = str.slice(start, i);
        var index = subStr.indexOf(str[i]);
        if (index > -1) {
            start = start + index + 1;
        }
        subStrLen = Math.max(subStrLen, i - start);
    }
    return subStrLen;
}

var res = findSubString("babcaacbd");
console.log("findSubString subStrLen", res);
```
- 实现一个 flat 函数，函数的作用是可以拍平一个数组，如 flat([1, [2, [3,4], [5]]]) = [1,2,3,4,5]
```
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

- 定时器打印函数
```
repeatFunc("hellworld"); // 会输出 4次 helloworld, 每次间隔3秒
const repeatFunc = repeat(console.log, 4, 3000);

// 我的代码
function repeat(func, times, wait) {
    var timer = null;
    var count = 0;

    return function () {
        const context = this;
        const args = arguments;

        const func1 = function () {
            if (count === times) {
                clearTimeout(timer);
                return;
            }
            count++;
            timer = setTimeout(() => {
                func.apply(context, args);
                func1();
            }, wait)
        }
        func1();

        // for (let i = 0; i < times; i++) {
        //     setTimeout(() => {
        //         func.apply(context, args);
        //     }, wait * i);
        // }

        // timer = setInterval(() => {
        //     if (times === count) {
        //         clearInterval(timer);
        //     }
        //     func.apply(context, args);
        //     count++;
        // }, wait);
    }
}
```

- 项目中做过的基础架构工作有哪些?

- 做过哪些性能优化相关的？

- React组件中需要引入react但是没用到是为什么？

- react组件列表渲染要加key是为什么？


#### 字节二面
- 浏览器都有哪些限制？
```
同源策略跨域限制，6个并发请求限制
```
- 浏览器同时加载100个资源请求，怎么优化页面首屏的加载时间？

- http和https有什么区别？https做了什么事情？

- https怎么实现数据加密传输的？中间人有办法窃取吗？https绝对安全吗？

- 简单介绍下tcp协议？三次握手具体怎么建立连接的？

- React中`setState`更新后的流程是怎样的？

- 为什么`setTimeout`中的setState是同步执行的，不回批量更新？

- 两个人同时修改一份数据？最终结果是怎样的？A和B同时提交修改，最终结果是什么？
```
Server: Hello world
A: Hello
B: Hello world and you.
```
- 编程题，实现从二叉树中找到连续的子节点，找到了返回true, 没有的话返回false?
```
// 二叉树找连续数组
//     1
//   2  3
// 4 5 6 7
// [2, 4] true
// [2, 6] false

// 我的代码
function isContain(origin, arr) {
    const originStr = origin.toString();
    const arrStr = arr.toString();
    const res = originStr.indexOf(arrStr) > -1;
    return res;
}

function findArray(tree, arr, origin) {
    if (isContain(origin, arr)) {
        return true;
    }
    if (tree.left && tree.right) {
        return findArray(tree.left, arr, origin.concat([tree.left.val])) ||
            findArray(tree.right, arr, origin.concat([tree.right.val])) ||
            false;
    }
    return false;
}

const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4 },
        right: { val: 5 }
    },
    right: {
        val: 3,
        left: { val: 6 },
        right: { val: 7 }
    }
}

var res = findArray(tree, [1, 2], [tree.val]);
console.log("res", res);
```

### 字节跳动 Tiktok
#### 一面
- 请介绍下http缓存机制？
- cookie，localStorage，sessionStorage之间的区别？
- cookie都有哪些字段，http-only的作用，secure是什么作用？
- cookie中为什么要设置domain？有什么好处？
- 浏览器script标签的async和defer有什么区别？
- ssr中的renderToString怎么解决阻塞问题，renderToString和
- ssr中的hydrate是干嘛的，和render的区别是什么?
- ssr中数据同构的处理流程
- 编程题：es6写个发布订阅模式
```
// 1. Support subscribing to events. 
emitter = new Emitter (); 
sub = emitter.subscribe('event_name', callback); // subscribe returns a subscription object
sub2 = emitter.subscribe('event_name', callback2);  // support multiple subscribing

// 2. Support emitting events. 
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters. 
emitter.emit('event_name', foo, bar); 

// 3. Support unsubscribing existing subscriptions by releasing them. 
sub.release(); // `sub` is the reference returned by `subscribe` above 
```
#### 二面
- 编程题： 压缩字符串
```
// "aaaaaaabbbbbbccccceee" => a7b6c5e3
// "aaaabbaaa" => a4b2a3

function transformStr1(str) {
    if (!str) return "";
    var list = [];
    var last = 0;
    var len = str.length;
    for (var i = 0; i <= len; i++) {
        if (i > 0 && str[i] !== str[i - 1]) {
            list.push(str[i - 1]);
            list.push(i - (last));
            last = i;
        }
    }
    return list.join("");
}

var res = transformStr1("aaaaaabbbbbcccceee");
console.log(res);

var strStr = function (haystack, needle) {
    var obj = haystack.split("").reduce((res, val, index) => {
        if (!res[val]) {
            res[val] = index;
        }
        return res;
    }, {});
    return obj[needle[0]] || 0;
};

const res = strStr("hello", "ll");
console.log("res", res);
```
- 编程题：格式化日期「YYYY-MM-DD hh:mm:ss」
```
// format(new Date)
// 2021-06-23 22:01:11
function format(date, str) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minite = date.getMinutes();
    const second = date.getSeconds();

    const formatMap = {
        "YYYY": year,
        "MM": addFixNumber(month),
        "DD": addFixNumber(day),
        "HH": addFixNumber(hour),
        "mm": addFixNumber(minite),
        "ss": addFixNumber(second)
    };

    const keys = Object.keys(formatMap);
    const len = str.length;
    for (var i = 0; i < keys.length; i++) {
        const idx = str.indexOf(keys[i]);
        console.log("str keys[i] idx", str, keys[i], idx);
        if (idx > -1) {
            const strLen = keys[i].length;
            if (idx == 0) {
                str = formatMap[keys[i]] + str.slice(i + strLen, len);
            } else {
                str = str.slice(0, idx) + formatMap[keys[i]] + str.slice(idx + strLen, len);
            }
            console.log("format after str", str);
        }
    }

    return str;
}

const res = format(new Date(), "YYYY-MM-DD HH:mm:ss");
console.log("res", res);
```
#### 三面
- 怎么样优化长列表的性能，如果有一个10w条数据的长列表，怎么让列表滑动不卡顿?
- 编程题： 给定一个字符串，请找出其中不含有重复字符的 "最长子串" 的长度。
```
// 样例
// - 输入: "abcabcbb"，输出: 3
//   - 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// - 输入: "bbbbb"，输出: 1
//   - 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// - 输入: "pwwkew"，输出: 3
//   - 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// - 输入: "dvdf"，输出: 3
//   - 解释: 因为无重复字符的最长子串是 "vdf"，所以其长度为 3。
// - 输入: "asjrgapa"，输出: 6
//   - 解释: 因为无重复字符的最长子串是 "sjrgap"，所以其长度为 6。
// - 输入: "aabaab!bb"，输出: 3
//   - 解释: 因为无重复字符的最长子串是 "ab!"，所以其长度为 3。
// - 输入: "abcb"，输出: 3
//   - 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// - 输入: "asljlj"，输出: 4
//   - 解释: 因为无重复字符的最长子串是 "aslj"，所以其长度为 4。
// - 输入: "qwnfenpglqdq"，输出: 8
//   - 解释: 因为无重复字符的最长子串是 "fenpglqd"，所以其长度为 8。

// 代码实现，仅供参考
function findMaxSubStrLen(str) {
    var start = 0;
    var end = 1;
    var maxLen = 0;

    while (end <= str.length) {
        var idx = str.slice(start, end).indexOf(str[end]);
        if (idx > -1) {
            start += idx + 1;
        }
        end++;
        maxLen = Math.max(end - start, maxLen);
    }
    return maxLen;
}
```
- 编程题：找出给定数字组合里下一个比它大的数
```
// 比如给定一个数 1234， 输出 1243；
// 输入1342，输出1423
// 输入12543，输出13245

// 代码实现，仅供参考
function findNextNumber(str) {
    if (str.length <= 1) return str;
    var pointer = str.length - 1;
    if (pointer > 0) {
        var subStr = str.slice(-pointer);
        var max = Math.max(subStr.slice(1).split(""));
        if (max <= subStr[0]) {
            p--;
        } else {
            var idx = subStr.slice(1).split("").reduce((res, val) => {
                if
            }, 0);
        }
    }
}

const res = findNextNumber(12543);
```