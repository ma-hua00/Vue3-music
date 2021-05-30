<template>
  <div class="scroll" ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from './use-scroll'

import { ref } from 'vue'

export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default() {
        return true
      }
    },
    probeType: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props, emit)

    return {
      rootRef,
      scroll
    }
  }
}
</script>

<style scoped>

</style>
