/**
 * 全局注册指令
 */
import Vue       from 'vue'
import validator from './validator'
import title     from './title'
import dropdown  from './dropdown'

Vue.directive('validator', validator)
Vue.directive('title', title)
Vue.directive('dropdown', dropdown)

