<template>
    <div class="tabbar">
      <tabbarItem path="/home">
        <template #tabbar-active-img>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #tabbar-img>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template #tabbar-text>
          <div>主页</div>
        </template>
      </tabbarItem>

      <tabbarItem path="/kind">
        <template #tabbar-active-img>
          <img slot="tabbar-active-img" src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #tabbar-img>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #tabbar-text>
          <div>分类</div>
        </template>
      </tabbarItem>

      <tabbarItem path="/shopcart">
        <template #tabbar-active-img>
          <img slot="tabbar-active-img" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template #tabbar-img>
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template #tabbar-text>
          <div>购物车</div>
        </template>
      </tabbarItem>

      <tabbarItem path="/profile">
        <template #tabbar-active-img>
          <img slot="tabbar-active-img" src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #tabbar-img>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #tabbar-text>
          <div>我的</div>
        </template>
      </tabbarItem>
    </div>
</template>

<script>
  import tabbarItem from './TabbarItem'
    export default {
        name: "Tabbar",
      components:{
          tabbarItem
      }
    }
</script>

<style scoped>
  .tabbar{
    text-align: center;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height:49px;
    font-size: var(--font-size);
    background-color: #f6f6f6;
    box-shadow: 0 -1px 2px rgba(100,100,100,0.3);
  }
  .tabbar-item img{
    vertical-align: middle;
    height: 24px;
    width: 24px;
  }
</style>
