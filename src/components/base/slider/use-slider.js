import BScroll from '@better-scroll/core'
import Slider from '@better-scroll/slide'

import { ref, onMounted, onUnmounted } from 'vue'

BScroll.use(Slider)

export default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      probeType: 2,
      momentum: false,
      bounce: false,
      slide: true
    })
    sliderVal.on('slideWillChange', page => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return {
    slider,
    currentPageIndex
  }
}
