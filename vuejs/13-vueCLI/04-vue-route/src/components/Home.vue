<template>
  <div class="div-demo">
    <h2>我是Home页面</h2>
    <p>我是Home页面的内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        path: '/home/news'
      }
    },
    //  该activated 方法只有在  router-view标签包裹在 keep-alive标签中时才有效
    activated() {
      this.$router.push(this.path)
    },
    //  组件路由守卫中的方法，当当前页面离开之前，会回调该方法
    beforeRouteLeave(to,from,next){
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>
  .div-demo{
    background: bisque;
  }
</style>
