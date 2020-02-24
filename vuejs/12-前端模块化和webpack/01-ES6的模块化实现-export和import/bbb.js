var name = 'xiao mei';
var age = 22;
var sex = '女';

// 导入export定义的变量
import {num1,height} from "./aaa.js";

console.log('num1= '+num1,' height= '+height);

//导入默认值default
import add from "./aaa.js";

console.log(add);

//  若是想一次性将该js文件中导出的值全部导入，可以使用通配符 * ，但是得起一个别名
import * as info from './aaa.js';

console.log('flag= '+info.flag);