import * as types from '../mutation-types'

const state = {
  messages: []
}

const mutations = {
  [types.ADD_MESSAGE] (state, message) {
    state.messages.push(message)
  },
  [types.CLEAR_MESSAGES] (state) {
    state.messages = []
  }
}

export default {
  state,
  mutations
}
