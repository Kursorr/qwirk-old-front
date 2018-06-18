import { IDB, Model } from './Model'

interface IMessageModel
{
  id       :  string,
  userId   :  string,
  convId   :  string,
  content  :  string,
  postedAt :  Date
}

class Message extends Model {
  private data: IMessageModel

  get Data (): IMessageModel {
    return this.data
  }

  constructor (db: IDB, data: IMessageModel = null)
  {
    super(db, 'messages')
    this.data = data
  }

  async insert (data: object): Promise<any>
  {
    return this.db.r.table(this.table).insert(data).run(this.db.conn)
  }

  async filter (data: object): Promise<any>
  {
    return this.db.r.table(this.table).filter(data).run(this.db.conn)
  }

  async update (id: string, data: object): Promise<any>
  {
    return this.db.r.table(this.table).get(id).update(data).run(this.db.conn)
  }
}

export { Message, IMessageModel }
