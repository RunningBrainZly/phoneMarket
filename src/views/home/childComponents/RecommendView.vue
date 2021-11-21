<template>
    <div id="recommendView">

    </div>
</template>

<script>
    export default {
        name: "RecommendView",
      props:{
          recommends:{
            type:Array,
            default() {
              return [];
            }
          }
      }
    }
</script>

<style scoped>
#recommendView{
  width: 100%;
  display: flex;
}
</style>
