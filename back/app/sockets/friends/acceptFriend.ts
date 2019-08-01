import { Socket } from '../../../scripts/class/Socket'
import { User } from '../../models/User'

const acceptFriend = (instance: Socket, socket: any) => {
  socket.on('acceptFriend', async (data) => {
    const { DB } = instance
    const userDb = new User(DB)

    const { user, friend, i } = data

    const friendCursor = await userDb.filter({ pseudo: friend })
    const requestedFriend = await friendCursor.toArray()


    const existingRelationCursor = await userDb.filterPluck(user, {
      from: user,
      to: requestedFriend[0].id
    })
    const existingRelation = await existingRelationCursor.toArray()

    const existingRelationCursor2 = await userDb.filterPluck(requestedFriend[0].id, {
      from: requestedFriend[0].id,
      to: user
    })
    const existingRelation2 = await existingRelationCursor2.toArray()

    console.log(existingRelation);
    console.log(existingRelation2);

  /*
    await userDb.updateFriend(user, i, {
      status: 1
    })

    await userDb.updateFriend(requestedFriend[0].id, i, {
      status: 1
    })

    socket.emit('acceptedFriend')

   */
  })
}

export { acceptFriend }
