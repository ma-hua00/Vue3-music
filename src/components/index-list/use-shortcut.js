import { ref, computed } from 'vue'

export default function useShortcut(props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const scrollRef = ref(null)

  const shortcutList = computed(() => {
    return props.data.map((item) => {
      return item.title
    })
  })

  const touch = {}

  function onShortcutStart(e) {
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.y1 = e.touches[0].pageY
    touch.anchorIndex = anchorIndex
    scrollTo(anchorIndex)
  }

  function onShortcutMove(e) {
    const y2 = e.touches[0].pageY
    const delta = (y2 - touch.y1) / ANCHOR_HEIGHT | 0
    const anchorIndex = touch.anchorIndex + delta
    scrollTo(anchorIndex)
  }

  function scrollTo(index) {
    if (isNaN(index)) {
      return
    }
    const anchorIndex = Math.max(0, Math.min(index, groupRef.value.children.length - 1))
    const scrollEl = groupRef.value.children[anchorIndex]
    const scroll = scrollRef.value.scroll
    scroll.scrollToElement(scrollEl, 0)
  }

  return {
    shortcutList,
    onShortcutStart,
    scrollRef,
    onShortcutMove
  }
}
