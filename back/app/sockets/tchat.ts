import { Socket } from '../../scripts/class/Socket'

const tchat = (instance: Socket, socket: any ) => {
  socket.on('SEND::MESSAGE', async data => {
    console.log(data)
  })
}

export { tchat }
