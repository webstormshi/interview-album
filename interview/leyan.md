### 乐言科技【上海】
1. 自我介绍
2. 用的react是哪个版本？都用过哪些hooks呢?
3. `Component`和`pureComponent`有什么区别？为什么组件的比较要分浅比较和深比较？组件浅比较解决乐什么问题？
4. object比较 == 和 === 有什么差别？
5. 简单说下深浅拷贝？最简单的浅拷贝？解构是深or浅拷贝？
6. 下面的返回的是什么？
```
const a = {};
const b = a;
const c = { ...a };
console.log(a === b);
console.log(a === c);
```
7. `react hooks`中的`useEffect`接受两个参数，加入有不同的第二个参数的话，callback的执行时机分别什么样的？第二个参数是空数组和其他变量，执行时机分别是什么样的？
```
const [a, setA] = useState(0);

// deps为空数组
useEffect(() => {
  console.log(a);
}, []);

// deps为[a]
useEffect(() => {
  console.log(a);
}, [a]);

setA(1);
```
8. `useMemo`和`useCallback`的用法，有什么区别？使用的时候可以互换吗？
```
useMemo:
useCallback:
```
9. 有函数组件之后，函数组件和类组件的优缺点是什么？
```
Component:
FunctionComponnent: 
```
10. 用hooks怎么实现类组件中的生命周期函数？
11. 工作中解决过的最困难的问题？
12. React 16.8版本上的react fiber有了解么，简单介绍下