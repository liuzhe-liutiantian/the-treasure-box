import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : ''
function hasUrl(url) {
  return userInfo.menus_url.some(item => item == url)
}

const route = new Router({
  mode: 'history',
  routes: [
    {
      path:'/login',
      component:()=>import('../pages/login')
    },
    {
      path:'/index',
      component:()=>import('../pages/index'),
      children:[
        {
          path:'/home',
          component:()=>import('../view/home'),
        },
        {
          path:'/menu',
          component:()=>import('../view/menu/index.vue'),
          //自定义属性meta，写在路由里
          meta:{
            name:'菜单列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/menu') ? next() : next('/home')
          }
        },
        {
          path:'/role',
          component:()=>import('../view/role/index.vue'),
          //自定义属性meta，写在路由里
          meta:{
            name:'角色列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/role') ? next() : next('/home')
          }
        },
        {
          path:'/user',
          component:()=>import('../view/user/index.vue'),
          meta:{
            name:'管理员列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/user') ? next() : next('/home')
          }
        },
        {
          path:'/sort',
          component:()=>import('../view/sort/index.vue'),
          meta:{
            name:'商品分类列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/sort') ? next() : next('/home')
          }
        },
        {
          path:'/specs',
          component:()=>import('../view/specs/index.vue'),
          meta:{
            name:'商品规格列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/specs') ? next() : next('/home')
          }
        },
        {
          path:'/goods',
          component:()=>import('../view/goods/index.vue'),
          meta: {
            name: '商品管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/goods') ? next() : next('/home')
          }
        },
        {
          path: '/member',
          component: () => import('../view/member/index.vue'),
          meta: {
            name: '会员管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/member') ? next() : next('/home')
          }
        },
        {
          path: '/banner',
          component: () => import('../view/banner/index.vue'),
          meta: {
            name: '轮播图管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/banner') ? next() : next('/home')
          }
        },
        {
          path: '/seck',
          component: () => import('../view/seck/index.vue'),
          meta: {
            name: '限时秒杀'
          },
          beforeEnter(to, from, next) {
            hasUrl('/seck') ? next() : next('/home')
          }
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
// 全局前置导航钩子函数
route.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
    return
  }
  let token = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')).token : ''
  if (token) {
    next()
    return
  }
  next('/login')
})

export default route