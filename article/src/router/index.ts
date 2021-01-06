import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      redirectAlreadyLogin: true
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import(/* webpackChunkName: "ColumnDetail" */ '../views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'create',
    meta: {
      requiredLogin: true
    },
    component: () => import(/* webpackChunkName: "create" */ '../views/CreatePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next('/login')
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  }
  next()
})

export default router
