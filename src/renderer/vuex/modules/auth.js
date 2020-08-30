import * as types from '../mutation-types';
const state = {
    user: null,
    users: []
};
const mutations = {
    [types.UPDATE_USER](state, user) {
        state.user = user;
        const userFound = state.users.find((u) => {
            return u.id === user.id;
        });
        if (userFound !== undefined) {
            Object.assign(userFound, user);
        }
    },
    [types.SET_USERS](state, users) {
        state.users = users;
    }
};
export default {
    state,
    mutations
};
