<template>
    <div>
      <navbar>
        <template #navbar-center>
          <div>分类</div>
        </template>
      </navbar>
    </div>
</template>

<script>
  import navbar from "components/common/navbar/Navbar"
    export default {
        name: "Kind",
      components:{
          navbar
      }
    }
</script>

<style scoped>

</style>
