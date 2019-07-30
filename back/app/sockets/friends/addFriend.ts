import * as r from 'rethinkdb'

import { Socket } from '../../../scripts/class/Socket'
import { User } from '../../models/User'

const addFriend = (instance: Socket, socket: any) => {
  socket.on('addFriend', async (data) => {
    const { user, friend } = data
    console.log(user, friend)

    r.db('qwirk').table('users').filter({ pseudo: 'quenti77' })

    r.db('qwirk').table('users').get('308be1e2-946f-4219-bcfb-aea558f36617').update(
      { friends: r.row('friends').append({'zfzef': 'zefzef'}) }
    )
  })
}

export { addFriend }
