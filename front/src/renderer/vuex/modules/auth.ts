import * as types from '../mutation-types'
import { IUser } from '@/types/user.types'

const state = {
  user: null
}

const mutations = {
  [types.UPDATE_USER] (state: any, user: IUser) {
    state.user = user
  }
}

export default {
  state,
  mutations
}
