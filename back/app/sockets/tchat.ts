import { Socket } from '../../scripts/class/Socket'
import { Message } from '../models/Message'
import {User} from "../models/User";

const tchat = (instance: Socket, socket: any ) => {
  const { DB } = instance
  const message = new Message(DB)
  const user = new User(DB)

  socket.on('SEND::MESSAGE', async data => {
    const convId = data.route.convId
    const content = data.content
    const userId = data.author.id

    const cursorMessage = await message.insert({
      convId,
      userId,
      content,
      postedAt: new Date()
    })

    if (cursorMessage) {
      socket.emit('updateMessage', {
        success: true,
        content
      })
    }
  })

  socket.on('GET::MESSAGES', async convId => {
    const channelId = convId
    console.log(channelId)
    const cursor = await message.filter({convId: channelId})
    const messages = await cursor.toArray()

    console.log(messages)
    socket.emit('updateMessage', messages)
  })

  socket.on('GET::CHANNELS', async userId => {
    console.log(userId)
  })
}

export { tchat }
