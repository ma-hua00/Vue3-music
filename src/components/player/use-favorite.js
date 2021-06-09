import { useStore } from 'vuex'
import { computed } from 'vue'
import { save, remove } from '@/js/array-store'
import { FAVORITE_KEY } from '@/js/constant'

export default function useFavorite() {
  const maxLEN = 100
  const store = useStore()
  const favoriteList = computed(() => store.state.favoriteList)

  // 获取favorite图标
  function getFavoriteIcon(song) {
    return isFavortie(song) ? 'icon-favorite' : 'icon-not-favorite'
  }
  // 切换收藏状态
  function toggleFavorite(song) {
    let list
    if (isFavortie(song)) {
      list = remove(FAVORITE_KEY, compare)
    } else {
      list = save(song, FAVORITE_KEY, compare, maxLEN)
    }
    store.commit('setFavoriteList', list)

    function compare(item) {
      return item.id === song.id
    }
  }
  // 判断歌曲是否被收藏
  function isFavortie(song) {
    return favoriteList.value.findIndex((item) => {
      return item.id === song.id
    }) > -1
  }

  return {
    getFavoriteIcon,
    toggleFavorite
  }
}
