import Vue    from 'vue'
import Vuex   from 'vuex'                               /*引入vue组件状态*/
import ls     from '../utils/localStorage'              /*引入本地存储组件*/
import router from '../router'                          /*引入路由*/

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ls.getItem('user'),                    /*Vuex中填充状态信息*/
    auth: ls.getItem('auth')                     /*添加 auth 来保存当前用户的登录状态*/
  },
  mutations: {

    /**
     * 创建用户的方法
     * @param state
     * @param user
     * @constructor
     */
    UPDATE_USER(state, user) {
      state.user = user                                 /*改变 user 的值*/
      ls.setItem('user', user)                   /*将改变后的值存入 localStorage*/
    },

    /**
     * 填写登陆状态的方法
     * @param state
     * @param auth
     * @constructor
     */
    UPDATE_AUTH(state, auth) {                          /*添加 UPDATE_AUTH 来更改当前用户的登录状态*/
      state.auth = auth
      ls.setItem('auth', auth)
    }
  },
  actions: {
    login({commit}, user) {
      if (user) {
        commit('UPDATE_USER', user)                     /*更新用户信息*/
        commit('UPDATE_AUTH', true)                     /*将状态改为已经登陆*/
      }
      router.push('/')                                  /*跳转到首页*/
    }
  },
  modules: {

  }
})
