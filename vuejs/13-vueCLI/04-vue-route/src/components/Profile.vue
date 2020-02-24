<template>
  <div>
    <h2>我是Profile标题</h2>
    <p>我是Profile内容</p>
    <p>{{this.$route.query.name}}</p>
    <p>{{this.$route.query.age}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('profile created')
    },
    destroyed() {
      console.log('profile destroyed')
    }
  }
</script>

<style scoped>

</style>
