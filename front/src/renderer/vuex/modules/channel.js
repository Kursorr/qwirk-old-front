import * as types from '../mutation-types';
const state = {
    currentChannel: null,
    servers: []
};
const mutations = {
    [types.SET_CHANNEL](state, channel) {
        state.currentChannel = channel;
        state.currentChannel.waitMsg = 0;
    },
    [types.UP_WAIT_MESSAGE](state, server) {
        const i = state.servers.findIndex((s) => {
            return s.id === server;
        });
        if (i > -1) {
            state.servers[i].waitMsg += 1;
        }
    },
    [types.SET_SERVERS](state, servers) {
        state.servers = servers;
    }
};
export default {
    state,
    mutations
};
