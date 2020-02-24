<template>
  <div id="app">
    <h2>modules演示-------------------------------</h2>
<!--    module中的属性的键时默认存储在该state中-->
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.UpdateNameGetters}}</h2>
    <button @click="moduleUpdateName">module更改name</button>
    <button @click="deDynUpdate()">module异步更改</button>

    <h2>actions演示--------------------------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info中的name</button>

    <h2>state、mutations演示-----------------------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
    <button @click="sub">-</button>

    <h2>getters演示------------------------------------------------</h2>
    <h2>{{$store.getters.getAgeTo20}}</h2>
    <h2>{{$store.getters.getAgeTo20Length}}</h2>
    <h2>{{$store.getters.getMoreAge(30)}}</h2>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    add(){
      this.$store.commit('increment')
    },
    add(count){
      //  前面的字符串表示调用的mutation中的方法名，后面的则为传递过去的参数
      // 1. 普通的提交风格
      this.$store.commit('incrementCount',count)

    //    2. 特殊的提交风格    以这种风格提交的时候，是以对象的形式提交的
      this.$store.commit({
        type: 'incrementCount',
        count,
        age: 13
      })
    },
    sub(){
      this.$store.commit('decrement')
    },
    updateInfo(){
      //  使用dispatch来调用actions中的方法
      this.$store
        .dispatch('aUpdateInfo','xiao-mei')
        .then((param) => {
          console.log(param)
        })
    },
    moduleUpdateName(){
      this.$store.commit('UpdateName','lisi')
    },
    deDynUpdate(){
      this.$store.dispatch('deDynUpdateName')
    }
  }
}
</script>

<style>

</style>
