import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('views/home/Home')
const PlayList=()=>import('views/playlist/PlayList')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/playlist/:id',
      component:PlayList
    }
  ]

const router = new VueRouter({
  routes
})

export default router
