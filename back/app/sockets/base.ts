'use strict';

import { Socket } from '../scripts/Socket'

const base = (instance: Socket) => {
    const { IO } = instance

    IO.on('connection', (socket) => {
        console.log('A customer is connected')

        socket.on('disconnect', () => {
            console.log('A customer is disconnected')
        })
    })
}

export { base }