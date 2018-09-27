import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  Layout : () => import('@/views/Layout'),
  index : () => import('@/views/index/index'),
}

export default new Router({
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
        }
      ]
    }
  ]
})
