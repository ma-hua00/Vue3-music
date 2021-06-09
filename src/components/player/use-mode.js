import { computed } from 'vue'
import { useStore } from 'vuex'
import { playMode } from '@/js/constant'

export default function useMode() {
  const store = useStore()
  const PlayMode = computed(() => store.state.playMode)

  const modeIcon = computed(() => {
    const playModeVal = PlayMode.value
    return playModeVal === playMode.sequence ? 'icon-sequence'
      : playModeVal === playMode.random ? 'icon-random' : 'icon-loop'
  })
  const modeText = computed(() => {
    const playModeVal = PlayMode.value
    return playModeVal === playMode.sequence ? '顺序播放'
      : playModeVal === playMode.random ? '随机播放' : '循环播放'
  })

  function changeMode() {
    const mode = (PlayMode.value + 1) % 3
    store.dispatch('changeMode', mode)
  }

  return {
    modeIcon,
    modeText,
    changeMode
  }
}
