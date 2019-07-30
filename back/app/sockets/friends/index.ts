import * as r from 'rethinkdb'

import { Socket } from '../../../scripts/class/Socket'
import { User } from '../../models/User'

const friends = (instance: Socket, socket: any) => {
  socket.on('friends', async (userId) => {
    const { DB } = instance
    const user = new User(DB)

    let total = {}
    let friends = []

    const cursor = await user.getFriends(userId)

    const obj = {
      pseudo: '',
      tag: '',
      avatar: '',
      status: ''
    }

    const friendsStatus: Array<string> = cursor.map(({ status }) => status)

    let i = 0;
    for await (const friend of cursor) {
      const cursorFriendData = await user.getSpecificData(friend.to, 'pseudo', 'tag', 'avatar')
      const { pseudo, tag, avatar } = cursorFriendData

      obj.pseudo = pseudo
      obj.tag = tag
      obj.avatar = avatar
      obj.status = friendsStatus[i]

      let three = Object.assign({}, obj, total)

      friends.push(three)
      i++
    }

    socket.emit('getFriends', friends)
  })
}

export { friends }
