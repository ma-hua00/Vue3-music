<template>
  <div id="nav">
    <m-header></m-header>
    <tab></tab>
  </div>
  <router-view />
  <player></player>
</template>

<script>
import MHeader from '@/components/header/header'
import Player from '@/components/player/player.vue'
import Tab from '@/components/tab/tab'
export default {
  components: { Tab, MHeader, Player }
}
</script>

<style lang="scss">
</style>
