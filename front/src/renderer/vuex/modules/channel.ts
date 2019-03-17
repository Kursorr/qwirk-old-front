import * as types from '../mutation-types'

const state = {
  current: null
}

const mutations = {
  [types.SET_CHANNEL] (state: any, channel: any) {
    state.current = channel
  }
}

export default {
  state,
  mutations
}
