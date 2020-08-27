import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      children: [
        {
          path: '/home',
          component: () => import('@/view/home')
        },
        {
          path: '/menu',
          component: () => import('@/view/menu/index'),
          meta: {
            name: '菜单列表'
          }
        },
        {
          path: '/role',
          component: () => import('@/view/role/index'),
          meta: {
            name: '角色列表'
          }
        },
        {
          path: '/user',
          component: () => import('@/view/user/index'),
          meta: {
            name: '管理员列表'
          }
        },
        {
          path: '/sort',
          component: () => import('@/view/sort/index'),
          meta: {
            name: '商品分类'
          }
        },
        
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }

  ]
})
