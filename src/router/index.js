import Vue from 'vue'                   /*引入vue*/
import Router from 'vue-router'         /*引入路由组件*/
import routes from './routes'           /*引入路由配置文件*/

Vue.use(Router)                         /*vue使用router组件*/


/**
 * 新建一个路由
 * @type {VueRouter}
 */
const router = new Router({
  mode: 'history',
  routes
})

/**
 * 路由前置 守卫
 */
router.beforeEach((to, from, next) => {
  const auth = router.app.$options.store.state.auth

  /*如果登录并且访问的路由中有auth字符就跳转到首页*/
  if (auth && to.path.indexOf('/auth/') !== -1) {
    next('/')
  }

  next()
})

/**
 * 设置出口和返回的数据
 */
export default router
