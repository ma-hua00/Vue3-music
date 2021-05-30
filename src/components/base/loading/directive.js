import { createApp } from 'vue'
import Loading from './loading'
import { addClass, removeClass } from '@/js/dom'

// 基础样式 用来设置position:relative
const relativeCls = 'g-relative'

const loadingDirective = {
  mounted(el, binding) {
    const app = createApp(Loading)
    // 创建实例
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    // 自定义指令的动态指令参数
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated(el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}

function append(el) {
  // getComputedStyle 获取dom的所有style样式
  const style = el.getComputedStyle
  if (['fixed', 'position', 'relative'].indexOf(style) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
