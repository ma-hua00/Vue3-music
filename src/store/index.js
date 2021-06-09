import { createStore, createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

// 判断当前是否属于开发状态
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  mutations,
  actions,
  getters,
  strict: debug,
  // 开发检测插件
  plugins: debug ? [createLogger()] : []
})
