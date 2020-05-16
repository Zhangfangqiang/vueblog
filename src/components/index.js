import Vue     from 'vue'                 /*引入Vue*/
import Message from './Message'           /*引入消息组件*/
import ContentList from './ContentList'   /*引入文章列表遍历组件*/

/*全局注册Message消息弹框组件*/
Vue.component('Message', Message)
Vue.component('ContentList', ContentList)
