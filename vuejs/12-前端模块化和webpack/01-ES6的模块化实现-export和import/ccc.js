// 导入{}定义的变量
import {flag, sum} from "./aaa.js";

if (flag){
  console.log("sum= "+sum(20,30))
}

// 导入export定义的函数/类
import {sub,Person} from "./aaa.js";

console.log('sub= '+sub(20,1));
var p = new Person();
console.log(p.run());