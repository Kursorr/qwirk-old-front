import * as types from '../mutation-types'
import { IUser } from '@/types/user.types'

const state = {
  user: null,
  users: []
}

const mutations = {
  [types.UPDATE_USER] (state: any, user: IUser) {
    state.user = user

    const userFound = state.users.find((u: IUser) => {
      return u.id === user.id
    })

    if (userFound !== undefined) {
      Object.assign(userFound, user)
    }
  },

  [types.SET_USERS] (state: any, users: []) {
    state.users = users
  }
}

export default {
  state,
  mutations
}
