<template>
  <div id="app">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import {request} from "./network/request";

  export default {
    name: 'App',
    data() {
      return {
        message: ''
      }
    },
    created() {
      request({
        url: 'home/multidata'
      }).then(res => {
        this.message = res
      })
    }
  }


</script>

<style>
</style>
