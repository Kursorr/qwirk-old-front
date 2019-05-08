import * as types from '../mutation-types';
export const authenticateUser = (state, user) => {
    state.commit(types.UPDATE_USER, user);
};
export const updateUser = (state, user) => {
    const updatedUser = JSON.parse(JSON.stringify(user));
    state.commit(types.UPDATE_USER, updatedUser);
};
//# sourceMappingURL=auth.js.map