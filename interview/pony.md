### pony.ai 一面
- 编程题
```
Description
给一个长度为2<=n<=10^5的deque，每次操作取出队首两个元素，将较大的放到队尾，较小的放到队首，求第1<=m<=10^18次操作时取出的元素。

4,3,5,1,2  4,3
3,5,1,2,4  3,5
3,1,2,4,5  3,1
1,2,4,5,3  1,2
1,4,5,3,2  1,4
1,5,3,2,4  1,5
1,3,2,4,5  1,3
1,2,4,5,3  1,2

*/

// 我的代码，只表示思路还没调通过
function findMElement(list, m) {
 const resMap = {};
  let findLoopTime = false;
  const times = 0;
  let period = 0;
  
  // 找到循环位置
  while(!findLoopTime) {
   const headEl = list.slice(0, 2);
    list.push(headEl[0] > headEl[1] ? headEl[1] : headEl[0]);
    list.unshift(headEl[0] > headEl[1] ? headEl[0] : headEl[1]);
    if(resMap[headEl.toString()]) {
      period = times - resMap[headEl.toString()]
      findLoopTime = true;
      break;
    }
    resMap[headEl.toString()] = times;
    times++;
  }
  
  // 求余找到对应的位置
  let target = [];
  const rest = ((m - (times - period)) % (period));
  Object.keys(resMap).forEach((key) => {
   if(rest + times - period === resMap[key]) {
     target = resMap[key].split(",").map(item => Number(item));
    }
  });
  return target;
}
```
#### 二面
- 编程题：求孤岛的数量
```
Description
Given a 2D array of integer describing an area of an ocean: 0 means water and 1 means land. Lands are connected if they’re 4-connected (connected via up / down / left / right) Count the number of islands in the area.

Sample Input
0000000000
0110001100
0010001000
0000000100
0000000000
Sample Output
3

[]

const data = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function getIslandCount(arr) {

    const direction = [
        [0, -1], // left
        [0, 1],  // right
        [-1, 0], // up
        [1, 0],  // down
    ];

    // 是否已经访问过
    let unVisitedArr = [];

    if (arr.length === 0) return 0;

    for (var i = 0; i < arr.length - 1; i++) {
        unVisitedArr[i] = [];
        for (var j = 0; j < arr[i].length; j++) {
            unVisitedArr[i][j] = true;
        }
    }

    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1 && unVisitedArr[i][j]) {
                count++;
                unVisitedArr[i][j] = false;
                const current = [i, j];
                markLand(arr, direction, current, unVisitedArr);
            }
        }
    }

    return count;
}

function markLand(arr, direction, current, unVisitedArr) {
    console.log("current", current);
    const [i, j] = current;
    unVisitedArr[i][j] = false;
    for (var m = 0; m < direction.length; m++) {
        const [row, col] = direction[m];
        if (arr[i + row][j + col] === 1 && unVisitedArr[i + row][j + col]) {
            markLand(arr, direction, [i + row, j + col], unVisitedArr);
        }
    }
}

console.log(getIslandCount(data)); // 3
```