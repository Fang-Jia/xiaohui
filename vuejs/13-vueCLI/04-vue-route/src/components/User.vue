<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面的内容</p>
    <h2>{{userID}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userID(){
        return this.$route.params.userid
      }
    },
    created() {
      console.log('User created')
    },
    destroyed() {
      console.log('User destroyed')
    }
  }
</script>

<style scoped>

</style>
