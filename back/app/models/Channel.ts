import { IDB, Model } from './Model'
import { IMembers } from '../interfaces/members'
import { IRoles } from '../interfaces/roles'
import { IMessages } from '../interfaces/messages'

interface IChannelModel
{
  id              : string,
  icon            : string,
  name            : string,
  moderation      : string,
  boosts          : number,
  members         : Array<IMembers>,
  messages        : Array<IMessages>,
  roles           : Array<IRoles>
}

class Channel extends Model {
  private readonly data: IChannelModel =  null

  constructor (db: IDB, data: IChannelModel = null)
  {
    super(db, 'servers')
    this.data = data
  }

  async getMessages (id: string): Promise<any>
  {
    return this.db.r.table(this.table).get(id)('messages').run(this.db.conn)
  }

  async insertMessage (id: string, data: Object): Promise<any>
  {
    return this.db.r.table(this.table).get(id).update({
      messages: this.db.r.row('messages').append(data)
    }).run(this.db.conn)
  }

  async getUsers (serverId: string): Promise<any>
  {
    return this.db.r.table(this.table).get(serverId)('members').run(this.db.conn)
  }

  async getLastMessage (serverId: string): Promise<any>
  {
    return this.db.r.table(this.table).get(serverId)('messages').nth(-1).run(this.db.conn)
  }
}

export { Channel, IChannelModel }
