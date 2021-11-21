<template>
  <div>
    <navbar>
      <template #navbar-center>
        <div>我的</div>
      </template>
    </navbar>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/Navbar"
    export default {
        name: "profile",
      components:{
          navbar
      }
    }
</script>

<style scoped>

</style>
