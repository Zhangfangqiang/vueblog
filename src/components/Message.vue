<template>
  <div v-show="show" class="zf-message">
    <div  :class="`alert alert-${type} alert-dismissible`">
      <button @click="close" type="button" class="close"><span>×</span></button>
      {{ msg }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    /**
     * props 是用来传递数据的，我们需要在子组件用 props 选项声明它预期的数据，
     */
    props: {
      /*是否显示消息框*/
      show: {
        type    : Boolean,
        default : false
      },
      /*消息框的类型*/
      type: {
        type    : String,
        default : 'success'
      },
      /*消息*/
      msg: {
        type    : String,
        default : ''
      }
    },

    /**
     * 侦听器
     */
    watch: {
      /**
       * watch 选项提供了一个方法来响应数据的变化，在上面的代码中，我们需要监听 show 的新值 value，完整的传参是
       * show(val, oldVal)，val 是新值，oldVal 是旧值。当新值返回 true 时，我们将当前元素滚动到可视区域的顶部。
       * @param value
       */
      show(value) {
        if (value) {
          /*注：实例的 $nextTick 方法用于在下次 DOM 更新循环结束之后执行延迟回调，它有一个对应的全局方法 Vue.nextTick。*/
          this.$nextTick(() => {
            this.$el.scrollIntoView(true)
          })
        }
      }
    },
    methods: {
      /*定义的一个方法*/
      close() {
        /*
         * $emit 用于触发当前实例上的事件，其第一个参数是事件名称，后面还可以附加若干参数。当点击关闭按钮时，
         * 我们触发一个 'update:show' 的事件，并附带一个参数 false，用来关闭消息提示。为什么事件名称是 'update:show'，
         * 我们稍后结合 props 进行讲解。
         * 不可以直接修改 show，这会导致 Vue 在控制台发出错误警告
         * this.show = false
         */
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped lang="scss">
.zf-message{
  position: relative;
  z-index: 99;
  >div{
    position: absolute;
    width: 100%;
    z-index: 100;
    opacity: 0.8;
  }
}
</style>
