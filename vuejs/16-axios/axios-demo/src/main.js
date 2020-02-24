import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

//  定义axios请求的全局配置参数
 axios.defaults.baseURL = "http://123.207.32.32:8000/api/hy";
 axios.defaults.timeout = 5000;
 // axios.defaults.baseURL = "http://106.54.54.237:8000/api/hy";

//  第一种没有参数类型
axios({
  url: '/home/multidata',
  method: 'get'
//  发起网络请求之后，返回的结果，axios默认会调用Promise中的resolve方法，将返回结果传递给then方法中
}).then(res => {
  console.log(res)
});

//  第二种 有参数类型
axios({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
});

//  发送并发请求的方式
axios.all([axios({
  url: '/home/multidata'
}),axios({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 5
  }
})])    //then(axios.spread(res1,res2 => {  log(res1); log(res2); })) 该方法可以直接拿到返回结果数组中的两个值
  .then(res => {
  console.log(res)
});

//  当有不同的服务器地址需要访问时，可以通过创建axios实例的方式来完成
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000/api/hy',
//   timeout: 5000
// });
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// });
//
// const instance2 = axios.create({
//   baseURL: 'http://106.54.54.237:8000/api/hy',
//   timeout: 5000
// });
//
// instance2({
//   url: '/category'
// }).then(res => {
//   console.log(res)
// });
