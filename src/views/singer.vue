<template>
  <div
    class="singer"
    v-loading="!singers.length"
  >
    <index-list
      @select="selectSinger"
      :data="singers"
    ></index-list>
    <!-- 实现路由跳转动画 -->
    <router-view
      :singer="selectedSinger"
      v-slot="{Component}"
    >
      <transition
        appear
        name="slide"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/index-list/index-list'
import { SINGER_KEY } from '@/js/constant'
import storage from 'good-storage'

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
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    // 储存歌手信息
    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer)
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
