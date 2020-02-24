<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <i slot="item-icon" class="fa fa-home" aria-hidden="true"></i>
        <i slot="item-icon-active" class="fa fa-home" aria-hidden="true" style="color: red"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i slot="item-icon" class="fa fa-bars" aria-hidden="true"></i>
        <i slot="item-icon-active" class="fa fa-bars" aria-hidden="true" style="color: red"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart">
        <i slot="item-icon" class="fa fa-cart-arrow-down" aria-hidden="true" ></i>
        <i slot="item-icon-active" class="fa fa-cart-arrow-down" aria-hidden="true" style="color: red"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <i slot="item-icon" class="fa fa-user-circle-o" aria-hidden="true" ></i>
        <i slot="item-icon-active" class="fa fa-user" aria-hidden="true" style="color: red"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabBar/TabBar";
  import TabBarItem from "./components/tabBar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/font-awesome/css/font-awesome.min.css";
</style>
