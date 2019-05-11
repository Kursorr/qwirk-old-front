'use strict'

import { IDB, Model } from './Model'
import { Password } from '../../scripts/class/Hash'

enum REASON
{
	NOT_FOUND,
	PASSWORD_MATCH,
	ERROR
}

interface IUserModel
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

class User extends Model {
  private readonly data: IUserModel

  get Data (): IUserModel {
    return this.data
  }

  constructor (db: IDB, data: IUserModel = null)
  {
    super(db, 'users')
    this.data = data
  }

  async filter (data: object): Promise<any>
  {
    return this.db.r.table(this.table).filter(data).run(this.db.conn)
  }

  private async opt (id: string, data: object): Promise<any>
  {
    return this.db.r.table(this.table).get(id).update(data).run(this.db.conn)
  }

  async update (id: string, data: object, password?: string): Promise<any>
  {
    const cursor = await this.filter({ id })
    const { password: result } = await cursor.next()

    if (password) {
      const verifPassword = await Password.compare(result, password)

      if (verifPassword) {
        return await this.opt(id, data)
      } else {
        throw new Error('Mot de passe invalide')
      }
    } else {
      return await this.opt(id, data)
    }
  }

  async get (data: object): Promise<any>
  {
    return this.db.r.table(this.table).get(data).run(this.db.conn)
  }

  async getAllChannels (id: string) : Promise<any>
  {
    return this.db.r.table('conversation_user').eqJoin('convId', this.db.r.table('conversations'))
      .filter({left: {userId: id }})
      .run(this.db.conn)
  }
}

export { User, IUserModel }
