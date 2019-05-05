'use strict'
import * as Pusher from 'pusher'

import { Socket } from '../../scripts/class/Socket'
import { register } from './auth/register'
import { profile } from './edit/profile'
import { login } from './auth/login'
import { tchat } from './tchat/tchat'

const base = (instance: Socket) => {
  const { IO } = instance

  IO.on('connection', (socket) => {
    console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`)
    const pusher = new Pusher({
      appId: '775677',
      key: 'e0aa787b85b50bfa58eb',
      secret: 'b4f9d925b8463739fbe3',
      cluster: 'eu',
      useTLS: true
    });

    setTimeout(() => {
      console.log('opla!')
      pusher.trigger('my-channel', 'my-event', {"message": "hello world"})
    }, 5000)
    register(instance, socket)
    login(instance, socket)
    profile(instance, socket)
    tchat(instance, socket)

    socket.on('disconnect', () => {
        console.log(`Customer disconnected id: ${socket.id} from port ${process.argv[2]}`)
    })
  })
}

export { base }
