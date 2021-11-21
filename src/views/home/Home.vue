<template>
  <div id="home">
    <navbar>
      <template #navbar-center>
        <div>购物街</div>
      </template>
    </navbar>
<!--轮播图-->
    <HomeSwiper :banners="banners"></HomeSwiper>
<!--前导页-->
    <recommendView :recommends="recommends"/>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/Navbar'
  import { Swiper,SwiperItem } from 'components/common/swiper'
  import { request } from "network/request"
  import HomeSwiper from './childComponents/HomeSwiper'
  import recommendView from './childComponents/RecommendView'

  import axios from 'axios'


  export default {
      name: "Home",
      components:{
        navbar,
        Swiper,
        SwiperItem,
        HomeSwiper,
        recommendView
      },
      data(){
        return {
          banners:[],
          recommends:[]
        }
      },
      created(){
       request().then( res => {
         this.banners = res.data;
       })

        new axios({
          url:'/home/recommendsData',
          method:'get'
        }).then(res => {
          this.recommends = res.data
          console.log(this.recommends);
        })
      },
      methods:{

      }
    }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
</style>
