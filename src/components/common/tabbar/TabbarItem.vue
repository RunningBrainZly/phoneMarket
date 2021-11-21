<template>
    <div class="tabbar-item" @click="tabbarItemClick">
      <div v-if="active"><slot name="tabbar-active-img"></slot></div>
      <div v-else><slot name="tabbar-img"></slot></div>
      <div :class="{'clickColor':active}"><slot name="tabbar-text"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "TabbarItem",
      props:{
        path:{
          type:String
        }
      },
      computed:{
        active(){
          return this.$route.path.indexOf(this.path) !== -1;
        }
      },
      methods:{
        tabbarItemClick(){
          console.log(this.path);
          this.$router.replace(this.path);
          console.log(this.$route.path);
        }
      }
    }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    margin-top: 4px;
  }
  .clickColor{
    color: var(--color-high-text);
  }
</style>
