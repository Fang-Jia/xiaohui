<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn";

  export default {
    name: "App",
    data(){
      return {
        message: 'hello word'
      }
    },
    methods: {
      btnClick(){
        console.log('哈哈哈哈哈哈');
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style scoped>

</style>