'use strict'

import { Socket } from '../../scripts/class/Socket'
import { register } from './auth/register'
import { profile } from './edit/profile'
import { login } from './auth/login'
import { tchat } from './tchat/tchat'
import { Amqp } from '../../scripts/class/Amqp'

const base = (instance: Socket) => {
  const { IO } = instance

  IO.on('connection', (socket) => {
    console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`)
    register(instance, socket)
    login(instance, socket)
    profile(instance, socket)
    tchat(instance, socket)

    const instanceAmqp = new Amqp('guest', 'guest', '172.18.0.4', '5672', '')
    const exchange = Amqp.initExchange('group', 'topic', { durable: false })

    instanceAmqp.get(exchange, '2a81ba12-002a-488b-953d-cce15ebf25a1', (content, msg) => {
      console.log('1', msg.fields.routingKey)
      socket.emit('addMessage', content)
    })

    instanceAmqp.get(exchange, '49235b24-0e02-47e8-a100-0a22001827f2', (content, msg) => {
      console.log('2', msg.fields.routingKey)
      socket.emit('addMessage', content)
    })

    socket.on('disconnect', () => {
        console.log(`Customer disconnected id: ${socket.id} from port ${process.argv[2]}`)
    })
  })
}

export { base }
