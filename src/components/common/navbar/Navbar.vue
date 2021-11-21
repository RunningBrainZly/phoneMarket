<template>
    <div class="navbar">
      <div class="navbar-left">
        <slot name="navbar-left"></slot>
      </div>
      <div class="navbar-center">
        <slot name="navbar-center"></slot>
      </div>
      <div class="navbar-right">
        <slot name="navbar-right"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
  .navbar{
    text-align: center;
    color: #fff;
    background-color: var(--color-tint);
    height:44px ;
    line-height: 44px;
  }
</style>
