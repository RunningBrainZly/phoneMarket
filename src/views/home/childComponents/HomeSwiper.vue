<template>
    <div id="homeSwiper">
      <Swiper>
        <swiper-item v-for="(item,id) in banners" :key="id" class="swiper-item">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </Swiper>
    </div>
</template>

<script>
  import { Swiper,SwiperItem } from 'components/common/swiper'
    export default {
        name: "HomeSwiper",
      props:{
        banners:{
          type:Array,
          default(){
            return []
          }
        }
      },
      components:{
          Swiper,
        SwiperItem,
      }
    }
</script>

<style scoped>
#homeSwiper img{
  width: 100%;
}
</style>
