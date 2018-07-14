import { Socket } from '../../scripts/class/Socket'
import { Message } from '../models/Message'

const tchat = (instance: Socket, socket: any ) => {
  socket.on('SEND::MESSAGE', async data => {
    const convId = data.route.convId
    const content = data.content
    const userId = data.author.id

    const { DB } = instance
    const message = new Message(DB)

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

  socket.on('GET::MESSAGES', async channelId => {
    // Récupérer les messages uniquement d'un seul channel avec le channelId
  })

  socket.on('GET::CHANNELS', async user => {
    // Récupérer tout les channels de l'utilisateur.
  })
}

export { tchat }
