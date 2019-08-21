import { getDatas } from '../../scripts/Helper'

import { pusher } from '../../config/config'
import { Socket } from '../../scripts/class/Socket'
import { User } from '../models/User'
import { Channel } from '../models/Channel'
import { ElasticSearch } from '../../scripts/class/ElasticSearch'

const tchat = (instance: Socket, socket: any) => {
  const { DB } = instance
  const user = new User(DB)
  const channel = new Channel(DB)

  socket.on('SEND::MESSAGE', async data => {
    const convId = data.route.convId
    const content = data.content
    const userId = data.author.id

    const cursor = await channel.insertMessage(convId, {
      userId,
      content,
      postedAt: new Date()
    })

    if (!cursor) { return }

    const msg = await channel.getLastMessage(convId)
    msg.user = await user.get(userId)

    let channelName = `ch-${convId}`

    pusher.trigger(channelName, 'receive', {
      msg
    })
  })

  socket.on('GET::MESSAGES', async (serverId: string) => {
    const cursor = await channel.getMessages(serverId)
    const messages = await cursor.toArray()

    const messagesToInsert = []

    for (let message of messages) {
      message.user = await user.get(message.userId)

      messagesToInsert.push({
        avatar: message.user.avatar,
        pseudo: message.user.pseudo,
        content: message.content
      })
    }

    const health = await new ElasticSearch()
    await health.connect()
    await health.readAndInsertData(messagesToInsert)

    socket.emit('updateMessage', messages)
  })

  socket.on('GET::SERVERS', async userId => {
    const cursor = await user.getServers(userId)
    const serversId = await cursor.toArray()

    const servers = await getDatas(
      serversId,
      async (channelId) => {
        return await channel.getSpecificData(channelId, 'icon', 'name')
      }
    )

    socket.emit('updateServers', servers)
  })

  socket.on('GET::CHANNELS::NAME', async serverId => {
    const name = await channel.getServerName(serverId)
    const channelsName = await channel.getChannelsName(serverId)

    socket.emit('updateChannel', { name, channelsName })
  })

  socket.on('GET::USERS', async channelId => {
    const cursor = await channel.getUsers(channelId)
    const users = await cursor.toArray()

    const usersInChannel = await getDatas(
      users,
      async (u) => {
        return await user.getSpecificData(u.userId, 'pseudo', 'avatar', 'status', 'tag')
      }
    )

    socket.emit('getUsersFromChannel', usersInChannel)
  })
}

export { tchat }
