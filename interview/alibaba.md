### 阿里巴巴【淘宝特价版】
#### 一面
- 编程题：实现一对querystring的转换函数parse和stringify
```
/**
 * 简单实现一个QueryString，具有parse和stringify的能力。
 * 
 * parse，用于把一个URL查询字符串解析成一个键值对的集合。
 * 输入：查询字符串 'foo=bar&abc=xyz&abc=123'
 * 输出：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * 
 * stringify，相反的，用于序列化给定对象的自身属性，生成URL查询字符串。
 * 输入：一个键值对的对象
 * {
 *   foo: 'bar',
 *   abc: ['xyz', '123'],
 * }
 * 输出：查询字符串 'foo=bar&abc=xyz&abc=123'
 *
 * 测试代码
 * QueryString.parse('foo=bar&abc=xyz&abc=123');
 * QueryString.stringify({ foo: 'bar', abc: ['xyz', '123'], });
 */

// 代码实现, 仅供参考
 const QueryString = {
    parse(str) {
        var pairs = str.split('&');
        var obj = {};
        pairs.forEach(pair => {
            const [key, value] = pair.split("=");
            if (obj[key]) {
                if (typeof obj[key] === "string") {
                    obj[key] = [obj[key], value];
                } else {
                    obj[key].push(value);
                }
            } else {
                obj[key] = value;
            }
        });
        return obj;
    },
    stringify(obj) {
        var strList = [];
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === "string") {
                strList.push(`${key}=${obj[key]}`);
            } else {
                obj[key].forEach(val => {
                    strList.push(`${key}=${val}`);
                });
            }
        });
        return strList.join("&");
    }
}
```
- 编程题：实现一个版本比较函数
```
/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2），
 * 如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0。
 * 版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位。
 *
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */

// 代码实现, 仅供参考
function compareVersion(v1, v2) {
    var v1s = v1.split(".");
    var v2s = v2.split(".");
    for (var i = 0; i < v1s.length; i++) {
        if (v1s[i] > v2s[i]) {
            return 1;
        } else if (v1s[i] == v2s[i]) {
            continue;
        } else {
            return -1;
        }
    }
    return 0;
}
```
- 编程题： 打家劫舍 - 求抢到的最大财宝值
```
/**
 * 假设你是一个专业的劫匪，你计划去打劫一条街上的家舍，每家有一定数量的钱财，
 * 但相邻两家有一个彼此连接的安全系统，一旦相邻两家在同一晚被打劫，那么这个安全系统就会自动报警。
 * 
 * 给你一个由非负整数组成的数组，用来代表每家的钱财，在不让安全系统自动报警的前提下，
 * 求你能打劫到的钱财的最大数量。
 [1,0,2,3,0,5,0,2,1]
 * 
 * 比如 [2, 0, 0, 4, 5]，能打劫到的最大钱财是7
 */
// 对于 [2, 0, 0, 4, 5]，能打劫到的最大钱财是7

// 代码实现, 仅供参考
var statusList = arr.forEach(item => true);

function getMaxValue(arr, statusList) {
  	// 找到最大值位置
  	var maxIdx = 0;
  	if(!statusList[0]) {
    	arr.forEach((item, index) => {
        	if(statusList[index]) {
              maxIdx = index;
              break;
            }
        });
    }
  	arr.forEach((item, index) => {
    	if(item > arr[maxIdx] && statusList[index]) {
        	maxIdx = index;
        }
    });
  
  	// 标记不可计算数据
  	statusList[maxIdx] = false;
  	if(maxIdx > 0) {
    	statusList[maxIdx-1] = false;
    }
  	if(maxIdx < arr.length-1) {
    	statusList[maxIdx+1] = false;
    }
  
  	// 剩下数据找最大值
  	return [maxIdx, ...getMaxValue(arr, statusList)];
}
```
#### 二面
- 项目经历
- 基础问题

### 三面
- 项目经历
- 工作能力
- 职业生涯规划