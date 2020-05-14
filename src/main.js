import './plugins/axios'
import Vue     from 'vue'
import App     from './App.vue'
import router  from './router'
import store   from './store'

/*引入路由组件*/
import './directives'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
