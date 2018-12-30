'use strict'

import { Socket } from '../../scripts/class/Socket'
import { register } from './auth/register'
import { profile } from './edit/profile'
import { login } from './auth/login'
import { tchat } from './tchat/tchat'

const base = (instance: Socket) => {
  const { IO } = instance

  IO.on('connection', (socket) => {
    console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`)
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
