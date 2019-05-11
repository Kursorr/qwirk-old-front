import * as types from '../mutation-types';
export const setChannel = (state, channel) => {
    state.commit(types.SET_CHANNEL, channel);
};
