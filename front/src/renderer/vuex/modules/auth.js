import * as types from '../mutation-types'

const state = {
  user: null
}

const mutations = {
  [types.UPDATE_USER] (state, user) {
    state.user = user
  }
}

export default {
  state,
  mutations
}
