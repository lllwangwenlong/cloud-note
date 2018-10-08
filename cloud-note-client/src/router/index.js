import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

const components = {
  Layout : () => import('@/views/Layout'),
  index : () => import('@/views/index/index'),
  register : () => import('@/views/register/index'),
  write : () => import('@/views/write/index'),
  article : () => import('@/views/article/index'),
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: components.Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          meta: {
            title: '云笔记首页'
          },
          component: components.index
        },
        {
          path: 'register',
          meta: {
            title: '新用户注册'
          },
          component: components.register
        },
        {
          path: 'write',
          meta: {
            title: '写笔记'
          },
          component: components.write
        },
        {
          path: 'article',
          name: 'article',
          meta: {
            title: '文章详情'
          },
          component: components.article
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  NProgress.configure({ easing: 'ease', speed: 500 })
})

export default router
