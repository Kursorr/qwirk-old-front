import * as types from '../mutation-types'

const state = {
  current: null,
  servers: []
}

const mutations = {
  [types.SET_CHANNEL] (state: any, channel: any) {
    state.current = channel
    state.current.waitMsg = 0;
  },
  [types.UP_WAIT_MESSAGE] (state: any, server: any) {
    const i = state.servers.findIndex((s: any) => {
      return s.id === server
    })

    if (i > -1) {
      state.servers[i].waitMsg += 1;
    }
  },
  [types.SET_SERVERS] (state: any, servers: any) {
    state.servers = servers
  }
}

export default {
  state,
  mutations
}
