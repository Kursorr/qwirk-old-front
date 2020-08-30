import * as types from '../mutation-types';
const state = {
    currentServer: null,
    currentChannel: null,
    servers: []
};
const mutations = {
    [types.SET_SERVER](state, server) {
        state.currentServer = server;
        state.currentServer.waitMsg = 0;
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
    },
    [types.SET_CHANNEL](state, channel) {
        state.currentChannel = channel;
    }
};
export default {
    state,
    mutations
};
