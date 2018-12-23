import { Socket } from '../../../scripts/class/Socket'

const search = (instance: Socket, socket: any) => {
  socket.on('GET::SEARCH_MESSAGE', async data => {
    console.log(data)
  })
}
