'use strict'

import { Socket } from '../../scripts/Socket'
import { auth } from './auth'

const base = (instance: Socket) => {
    const { IO } = instance

    IO.on('connection', (socket) => {
        console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`)

        auth(instance, socket)

        socket.on('disconnect', () => {
            console.log(`Customer disconnected id: ${socket.id} from port ${process.argv[2]}`)
        })
    })
}

export { base }