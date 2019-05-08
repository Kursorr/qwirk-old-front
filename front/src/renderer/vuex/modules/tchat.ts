import * as types from '../mutation-types'

const state = {
  messages: [],
  tab: {
    settings: [
      {
        id: 'friends',
        name: 'Amis',
        selected: false
      },
      {
        id: 'groups',
        name: 'Groupes',
        selected: false
      },
      {
        id: 'channels',
        name: 'Channels',
        selected: false
      }
    ],
    pm: [],
    groups: [],
    channels: []
  }
}

const mutations = {
  [types.ADD_MESSAGE] (state: any, message: any) {
    state.messages.push(message)
  },
  [types.CLEAR_MESSAGES] (state: any) {
    state.messages = []
  },
  [types.GET_CHANNELS] (state: any) {
    // console.log('GET_CHANNELS')
  },
  [types.GET_MESSAGES] (state: any) {
    // console.log('GET_MESSAGES')
  },
  [types.CLEAR_CHANNELS] (state: any) {
    state.tab.pm.splice(0, state.tab.pm.length)
    state.tab.groups.splice(0, state.tab.groups.length)
    state.tab.channels.splice(0, state.tab.channels.length)
  }
}

export default {
  state,
  mutations
}
