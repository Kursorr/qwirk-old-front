import * as types from '../mutation-types'

export const authenticateUser = (state, user) => {
  state.commit(types.AUTH_USER, user)
}
