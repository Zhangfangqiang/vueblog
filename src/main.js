import Vue     from 'vue'       /*引用vue*/
import App     from './App.vue' /*Vue根组件*/
import router  from './router'  /*route路由*/
import store   from './store'   /*存储数据的地方*/
import './directives'           /*引入指令*/
import './components'           /*引入组件*/
import './plugins/axios'        /*引入axios插件*/

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
