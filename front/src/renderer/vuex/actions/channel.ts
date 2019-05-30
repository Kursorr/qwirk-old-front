import * as types from '../mutation-types'

export const setChannel = (state: any, channel: any) => {
  state.commit(types.SET_CHANNEL, channel)
}

export const upWaitMsg = (state: any, server: any) => {
  state.commit(types.UP_WAIT_MESSAGE, server)
}

export const setServers = (state: any, servers: any) => {
  state.commit(types.SET_SERVERS, servers)
}
