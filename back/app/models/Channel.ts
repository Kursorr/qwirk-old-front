import { IDB, Model } from './Model'

interface IChannelModel
{
  id              : string,
  tag             : number,
  pseudo          : string,
  email           : string,
  password        : string,
  createdAt?      : Date,
  modifiedAt?     : Date,
  emailVerified?  : boolean,
  file?           : string
}

class Channel extends Model {
  private readonly data: IChannelModel =  null

  constructor (db: IDB, data: IChannelModel = null)
  {
    super(db, 'conversations')
    this.data = data
  }

  async allMessagesgById (id: string): Promise<any>
  {
    return this.db.r.table('messages').eqJoin('userId', this.db.r.table('users'))
      .filter({ left: { convId: id }})
      .run(this.db.conn)
  }

  async getUsers (convId: string): Promise<any>
  {
    return this.db.r.table('conversation_user')
      .filter({ convId })('userId')
      .run(this.db.conn)
  }
}

export { Channel, IChannelModel }
