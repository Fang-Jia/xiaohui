<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    tag属性 会修改该route-link标签显示在页面中的样式
        active-class 属性会在该标签上添加class，并且只有在触发该标签时才会显示该class-->
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>
    <router-link :to="'/user/'+userId" >用户</router-link>
    <router-link :to="{path: '/profile',query: {name: 'xiao-fang', age: 22}}" >档案</router-link>

<!--    exclude是keep-alive的属性，表示排除某些标签，不缓存他们-->
    <keep-alive exclude="User,Profile">
      <router-view/>
    </keep-alive>

<!--    通过代码进行路由跳转-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
<!--    <button @click="profileClick">档案</button>-->
<!--    <router-views></router-views>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick(){
      this.$router.push('/home');
    },
    aboutClick(){
      this.$router.push('/about');
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {name: 'lisi', age: 18}
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
