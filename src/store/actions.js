import { playMode } from '@/js/constant'
import { shuffle } from '@/js/util'

// 选择歌曲播放
export function selectPlay({ commit }, { list, index }) {
  commit('setPlayMode', playMode.sequence)
  commit('setSequenceList', list)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
  commit('setFullScreen', true)
  commit('setPlayingState', true)
}

// 随机播放
export function randomPlay({ commit }, list) {
  commit('setPlayMode', playMode.random)
  commit('setSequenceList', list)
  commit('setPlayList', shuffle(list))
  commit('setCurrentIndex', 0)
  commit('setFullScreen', true)
  commit('setPlayingState', true)
}

export function changeMode({ commit, state, getters }, mode) {
  const currentId = getters.currentSong.id
  if (mode === playMode.random) {
    commit('setPlayList', shuffle(state.sequenceList))
  } else if (mode === playMode.sequence) {
    commit('setPlayList', state.sequenceList)
  }
  const index = state.playList.findIndex((song) => {
    return song.id === currentId
  })
  commit('setPlayMode', mode)
  commit('setCurrentIndex', index)
}
