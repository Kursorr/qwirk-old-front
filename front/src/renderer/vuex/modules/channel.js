import * as types from '../mutation-types';
const state = {
    current: null
};
const mutations = {
    [types.SET_CHANNEL](state, channel) {
        state.current = channel;
    }
};
export default {
    state,
    mutations
};
