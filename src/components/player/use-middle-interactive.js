import { ref } from 'vue'

export default function useMiddleInteractive() {
  const middleLStyle = ref(null)
  const middleRStyle = ref(null)
  const currentShow = ref('cd')

  let currentView = 'cd'
  const touch = {}

  function onMiddleTouchStart(e) {
    touch.startX = e.touches[0].pageX
  }
  function onMiddleTouchMove(e) {
    const delta = e.touches[0].pageX - touch.startX
    const left = currentView === 'cd' ? 0 : -window.innerWidth
    const offsetWidth = Math.min(0, Math.max(-window.innerWidth, delta + left))
    touch.percent = Math.abs(offsetWidth / window.innerWidth)
    if (currentView === 'cd') {
      if (touch.percent > 0.2) {
        currentShow.value = 'lyric'
      } else {
        currentShow.value = 'cd'
      }
    } else {
      if (touch.percent < 0.8) {
        currentShow.value = 'cd'
      } else {
        currentShow.value = 'lyric'
      }
    }
    middleLStyle.value = {
      opacity: `${1 - touch.percent}`
    }
    middleRStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`
    }
  }
  function onMiddleTouchEnd() {
    currentView = currentShow.value
    const opacity = currentView === 'cd' ? 1 : 0
    const offsetWidth = currentView === 'cd' ? 0 : -window.innerWidth
    const duration = 300
    middleLStyle.value = {
      opacity,
      transitionDuration: `${duration}ms`
    }
    middleRStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`,
      transitionDuration: `${duration}ms`
    }
  }
  return {
    middleLStyle,
    middleRStyle,
    currentShow,
    onMiddleTouchStart,
    onMiddleTouchMove,
    onMiddleTouchEnd
  }
}
