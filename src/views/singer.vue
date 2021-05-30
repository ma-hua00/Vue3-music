<template>
  <div class="singer" v-loading="!singers.length">
    <index-list @select="selectSinger" :data="singers"></index-list>
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/index-list/index-list'

export default {
  name: 'singer',
  components: { IndexList },
  data() {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  async created() {
    const result = await getSingerList()
    this.singers = result.singers
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
  }
}
</script>

<style scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 0;
  }
</style>
