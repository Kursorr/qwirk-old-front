'use strict';

import { IDB, Model } from './Model'

enum REASON
{
  NOT_FOUND,
  PASSWORD_MATCH,
  ERROR
}

interface IUserModel
{
  id              : string,
  name            : string,
  email           : string,
  password        : string,
  createdAt?      : Date,
  modifiedAt?     : Date,
  emailVerified?  : boolean
}

class User extends Model
{
  private data : IUserModel
  get Data () : IUserModel { return this.data }

  constructor (db : IDB, data : IUserModel = null)
  {
    super(db, 'users')
    this.data = data
  }

  find (id : string) : Promise<any>
  {
    return new Promise<any>((resolve, reject) => {
      this.db.r.table(this.name).get(id).run(this.db.conn).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export { User, IUserModel }
