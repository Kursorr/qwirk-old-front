import * as types from '../mutation-types'

const state = {
  currentServer: null,
  currentChannel: null,
  servers: []
}

const mutations = {
  [types.SET_SERVER] (state: any, server: any) {
    state.currentServer = server
    state.currentServer.waitMsg = 0;
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
  },
  [types.SET_CHANNEL] (state: any, channel: any) {
    state.currentChannel = channel
  }
}

export default {
  state,
  mutations
}
