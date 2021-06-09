const mutations = {
  setPlayingState(state, playing) {
    state.playing = playing
  },
  setSequenceList(state, list) {
    state.sequenceList = list
  },
  setPlayList(state, list) {
    state.playList = list
  },
  setPlayMode(state, mode) {
    state.playMode = mode
  },
  setCurrentIndex(state, index) {
    state.currentIndex = index
  },
  setFullScreen(state, fullScreen) {
    state.fullScreen = fullScreen
  },
  setFavoriteList(state, list) {
    state.favoriteList = list
  },
  addLyric(state, { song, lyric }) {
    state.sequenceList.map(item => {
      if (item.id === song.id) {
        item.lyric = lyric
      }
      return item
    })
  }
}

export default mutations
