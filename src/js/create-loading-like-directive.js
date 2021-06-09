import { createApp } from 'vue'
import { addClass, removeClass } from '@/js/dom'

// 基础样式 用来设置position:relative
const relativeCls = 'g-relative'

export default function createLoadingLikeDirective(Comp) {
  return {
    mounted(el, binding) {
      const app = createApp(Comp)
      // 创建实例
      const instance = app.mount(document.createElement('div'))
      // 解决在同一个标签使用多个该类型指令时出现的bug
      const name = Comp.name
      if (!el[name]) {
        el[name] = {}
      }
      el[name].instance = instance
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
      const name = Comp.name
      if (typeof title !== 'undefined') {
        el[name].instance.setTitle(title)
      }
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    }
  }
  function append(el) {
    // getComputedStyle 获取dom的所有style样式
    const style = el.getComputedStyle
    const name = Comp.name
    if (['fixed', 'position', 'relative'].indexOf(style) === -1) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance.$el)
  }
  function remove(el) {
    const name = Comp.name
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance.$el)
  }
}
