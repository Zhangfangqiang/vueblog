import './plugins/axios'
import Vue     from 'vue'       /*引用vue*/
import App     from './App.vue' /*Vue根组件*/
import router  from './router'  /*route路由*/
import store   from './store'   /*存储数据的地方*/

/*引入路由组件*/
import './directives'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
