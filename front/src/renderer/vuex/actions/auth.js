import * as types from '../mutation-types'

export const authenticateUser = (state, user) => {
  state.commit(types.UPDATE_USER, user)
}

export const updateUser = (state, user) => {
  const updateUser = JSON.parse(JSON.stringify(user))
  state.commit(types.UPDATE_USER, updateUser)
}
