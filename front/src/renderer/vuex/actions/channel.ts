import * as types from '../mutation-types'

export const setChannel = (state: any, channel: any) => {
  state.commit(types.SET_CHANNEL, channel)
}
