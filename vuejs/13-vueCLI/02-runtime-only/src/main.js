import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  //  h --> 表示的是一个参数，但是该参数为函数类型的
  //  1.该函数使用方式一、 h('标签'，相关数据对象(可以不传)，‘内容数组’)
  // render: h => h('h2',{class: 'div-demo'},'hello word')

  //  2.使用方式二、 传入组件对象
  render: h => h(App)
})
