<template>
  <div id="nav">
    <m-header></m-header>
    <tab></tab>
  </div>
  <router-view/>
</template>

<script>
import MHeader from './components/header/header'
import Tab from './components/tab/tab'
export default {
  components: { Tab, MHeader }
}
</script>

<style lang="scss">

</style>
