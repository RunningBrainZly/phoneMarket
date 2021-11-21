<template>
  <div>
    <navbar>
      <template #navbar-center>
        <div>购物车</div>
      </template>
    </navbar>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/Navbar"
    export default {
        name: "Shopcart",
      components:{
          navbar
      }
    }
</script>

<style scoped>

</style>
