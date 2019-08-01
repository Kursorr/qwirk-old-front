import { Socket } from '../../../scripts/class/Socket'
import { User } from '../../models/User'

const addFriend = (instance: Socket, socket: any) => {
  socket.on('addFriend', async (data) => {
    const { DB } = instance
    const userDb = new User(DB)

    const { user, friend } = data

    const friendCursor = await userDb.filter({ pseudo: friend })
    const requestedFriend = await friendCursor.toArray()

    if (requestedFriend.length === 0) {
      return socket.emit('sendFriendRequest', {
        requestResult: false
      })
    }

    // Need to fix index

    await userDb.addFriend(user, {
      from: user,
      status: 2,
      requestedBy: true,
      to: requestedFriend[0].id
    })

    await userDb.addFriend(requestedFriend[0].id, {
      from: requestedFriend[0].id,
      status: 2,
      requestedBy: false,
      to: user
    })

    socket.emit('sendFriendRequest', {
      requestResult: true,
      pseudo: requestedFriend[0].pseudo
    })
  })
}

export { addFriend }
