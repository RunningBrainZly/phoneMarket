import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/home/Home'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/kind',
    component: ()=>import('views/kind/Kind')
  },
  {
    path:'/shopcart',
    component: ()=>import('views/shopcart/Shopcart')
  },
  {
    path:'/profile',
    component: ()=>import('views/profile/Profile')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
