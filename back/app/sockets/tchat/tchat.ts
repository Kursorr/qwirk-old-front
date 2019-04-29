import { Amqp } from '../../../scripts/class/Amqp'
import { Socket } from '../../../scripts/class/Socket'
import { Message } from '../../models/Message'
import { User } from '../../models/User'

const tchat = (instance: Socket, socket: any ) => {
  const { DB } = instance
  const message = new Message(DB)
  const user = new User(DB)

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

    const instanceAmqp = new Amqp('guest', 'guest', '172.18.0.5', '5672', '')
    const exchange = Amqp.initExchange('group', 'topic', { durable: false })

    await instanceAmqp.send(exchange, convId, msg)
  })

  socket.on('GET::MESSAGES', async convId => {
    const cursor = await message.ascOrder('postedAt', { convId: parseInt(convId) })
    const messages = await cursor.toArray()

    for (let message of messages) {
      console.log(message)
      message.user = await user.get(message.userId)
    }

    socket.emit('updateMessage', messages)
  })

  socket.on('GET::CHANNELS', async userId => {
    const cursor = await user.getAllChannels(userId)
    const channels = await cursor.toArray()

    socket.emit('updateChannel', channels)
  })
}

export { tchat }
