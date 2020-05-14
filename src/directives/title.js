/**
 * 展示标题的方法
 * @param el
 * @param title
 */
function showTitle(el, title) {
  const popover      = getPopover()
  const popoverStyle = popover.style

  if (title === undefined) {
    popoverStyle.display = 'none'
  } else {
    const elRect          = el.getBoundingClientRect()
    const elComputedStyle = window.getComputedStyle(el, null)
    const rightOffset     = parseInt(elComputedStyle.getPropertyValue('padding-right')) || 0
    const topOffset       = parseInt(elComputedStyle.getPropertyValue('padding-top')) || 0

    popoverStyle.visibility = 'hidden'
    popoverStyle.display    = 'block'
    popover.querySelector('.popover-content').textContent = title
    popoverStyle.left       = elRect.left - popover.offsetWidth / 2 + (el.offsetWidth - rightOffset) / 2 + 'px'
    popoverStyle.top        = elRect.top - popover.offsetHeight + topOffset + 'px'
    popoverStyle.display    = 'block'
    popoverStyle.visibility = 'visible'
  }
}

/**
 * 获取弹窗的方法
 * @returns {Element}
 */
function getPopover() {
  let popover = document.querySelector('.title-popover')

  if (!popover) {
    const tpl = `
      <div class="popover title-popover top fade in" style="position:fixed;">
        <div class="arrow"></div>
        <div class="popover-content"></div>
      </div>
    `
    const fragment = document.createRange().createContextualFragment(tpl)
    document.body.appendChild(fragment)
    popover        = document.querySelector('.title-popover')
  }

  return popover
}

export default {
  /*
   * bind：只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置；
   * inserted：被绑定元素插入父节点时调用；
   * update：所在组件的 VNode（虚拟节点）更新时调用，但是可能发生在其子 VNode 更新之前；
   * componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用；
   * unbind：只调用一次，指令与元素解绑时调用，在这里可以移除绑定的事件和其他数据；
   */
  bind(el, binding, vNode) {

    /**
     * 当定点设备（通常指鼠标）移动到元素上时就会触发 mouseenter
     * 当鼠标移出元素触发该事件 mouseleave
     * 点击元素 click
     * @type {string[]}
     */
    const events  = ['mouseenter','mouseleave','click'];
    const handler = (event) => {
      /**
       * 如果 handler 的事件类型是mouseenter
       */
      if (event.type === 'mouseenter') {
        showTitle(el, binding.value)
      } else {
        showTitle()
      }
    }

    /*循环事件*/
    events.forEach((event) => {
      /*给每个事件 添加handler方法 */
      el.addEventListener(event, handler, false)
    })

    /*在 el 元素上添加一个属性，以在其他钩子进行访问*/
    el.destroy = () => {

      /*移除 el 元素上的事件监听*/
      events.forEach((event) => {
        el.removeEventListener(event, handler, false)
      })

      /*移除 el 元素上的 destroy*/
      el.destroy = null
    }
  },
  unbind(el) {
    /*移除事件监听和数据绑定*/
    el.destroy()
  }
}
