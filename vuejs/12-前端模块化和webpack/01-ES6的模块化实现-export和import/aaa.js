var name = 'zhang san';
var age = 12;
var sex = '男';
var flag = true;

function sum(number1,number2) {
  return number1 + number2;
}

if (flag){
  console.log("sum= "+sum(10,20))
}


//1. 导出方式一、  导出该js内的变量
export {
  flag,sum
}

//2. 导出方式二、   导出一个变量
export var num1 = 100;
export var height = 1.88;

//3. 导出方式三、   导出函数/类
export function sub(x,y) {
  return x - y;
}

export class Person {
  run(){
    console.log('在奔跑。。。。');
  }
}

//4.  导出默认值default  但是只能导出一个default，并且导出default类型的值时，import方可以自定义接收的变量名
var address = '北京';
export default address;