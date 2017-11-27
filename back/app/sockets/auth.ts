'use strict'

import { Socket } from '../scripts/Socket'

const auth = (instance: Socket, socket: any) => {
    socket.on('authenticate', (data) => {
        console.log(data)
    })
}

export { auth }