<template>
  <div id="nav">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from "./components/common/tabbar/Tabbar"
export default {
  el:"#app",
  components:{
      tabbar,
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
