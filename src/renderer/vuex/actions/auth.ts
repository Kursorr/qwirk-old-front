import * as types from '../mutation-types'
import { IUser } from '@/types/user.types'

export const authenticateUser = (state: any, user: IUser) => {
  state.commit(types.UPDATE_USER, user)
}

export const updateUser = (state: any, user: IUser) => {
  const updatedUser = JSON.parse(JSON.stringify(user))
  state.commit(types.UPDATE_USER, updatedUser)
}

export const setUsers = (state: any, users: []) => {
  state.commit(types.SET_USERS, users)
}
