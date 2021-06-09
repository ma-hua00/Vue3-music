import { playMode, FAVORITE_KEY } from '@/js/constant'
import { loading } from '@/js/array-store'

export const state = {
  sequenceList: [],
  playList: [],
  playing: false,
  playMode: playMode.sequence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: loading(FAVORITE_KEY)
}

export default state
