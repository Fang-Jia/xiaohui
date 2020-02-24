import Vue from "vue";
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 100,
    students: [
      {name: 'lisi',age: 12},
      {name: 'wangwu',age: 34},
      {name: 'xiaoming',age: 24},
      {name: 'xiaofang',age: 22},
      {name: 'xiaomei',age: 8}
    ],
    info: {
      name: 'xiao-fang',
      age: 22
    }
  },

  //  mutation中存放的是方法，state中的值要改变的话得需要通过mutation中的方法来进行操作，
  //  如果直接通过修改state中的值，那么vuex的devtools工具就会检测不到，无法生成日志
  mutations,

  // 存放一些异步的方法  每个actions中的方法都有一个参数context，该参数表示store对象
  actions,

  // 跟computed相似，当一个数据需要通过一定的计算或一些处理得到，那么就可以使用getters
  getters,

  // moduleA中的getters和mutations的使用和原来方式一样
  // moduleA中的actions中的方法commit时只能提交到自己上下文所在区域的mutations中
  // 要想获取根中的内容可以通过rootState、rootGetters
  modules: {
    a: moduleA
  }
});

//对象的结构
const obj = {
  name: 'xiao-fang',
  age: 13,
  sex: '男'
};
//  可以这样获取对象中的内容，根据{}中的名字来一一赋值，不根据顺序
const {name,age,sex} = obj;
console.log(name);
console.log(age);
console.log(sex);

export default store
