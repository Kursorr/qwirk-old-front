import { Socket } from '../../scripts/class/Socket'
import { Message } from '../models/Message'
import { User } from '../models/User'
import { Channel } from '../models/Channel'
import { pusher } from '../../config/config'

const tchat = (instance: Socket, socket: any) => {
  const { DB } = instance
  const message = new Message(DB)
  const user = new User(DB)
  const channel = new Channel(DB)

  socket.on('SEND::MESSAGE', async data => {
    const convId = data.route.convId
    const content = data.content
    const userId = data.author.id
    const pseudo = data.author.pseudo
    const avatar = data.author.avatar

    const cursor = await message.insert({
      convId,
      userId,
      avatar,
      pseudo,
      content,
      postedAt: new Date()
    })

    if (!cursor) { return }

    const msg = await message.get(cursor.generated_keys[0])
    msg.user = await user.get(msg.userId)

    let channelName = `ch-${convId}`

    pusher.trigger(channelName, 'receive', {
      msg
    })
  })

  socket.on('GET::MESSAGES', async convId => {
    const cursor = await message.ascOrder('postedAt', { convId: convId })
    const messages = await cursor.toArray()

    for (let message of messages) {
      message.user = await user.get(message.userId)
    }

    socket.emit('updateMessage', messages)
  })

  socket.on('GET::CHANNELS', async userId => {
    const cursor = await user.getAllChannels(userId)
    const channels = await cursor.toArray()

    socket.emit('updateChannel', channels)
  })

  socket.on('GET::USERS', async channelId => {
    const cursor = await channel.getUsers(channelId)
    const users = await cursor.toArray()

    let obj = {
      pseudo: '',
      avatar: '',
      status: ''
    }
    let temp = {}
    let usersInChannel = []

    for await (const userId of users) {
      const userData = await user.getSpecificData(userId, 'pseudo', 'avatar', 'status')
      const { pseudo, avatar, status } = userData

      obj.pseudo = pseudo
      obj.avatar = avatar
      obj.status = status

      let tempObject = Object.assign({}, obj, temp)
      usersInChannel.push(tempObject)
    }

    socket.emit('getUsersFromChannel', usersInChannel)
  })
}

export { tchat }
