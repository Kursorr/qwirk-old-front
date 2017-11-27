'use strict';

import { Socket } from '../scripts/Socket'
import { auth } from './auth'

const base = (instance: Socket) => {
    const { IO } = instance

    IO.on('connection', (socket) => {
        console.log('A customer is connected')

        auth(instance, socket)

        socket.on('disconnect', () => {
            console.log('A customer is disconnected')
        })
    })
}

export { base }