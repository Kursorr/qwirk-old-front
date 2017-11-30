'use strict'

interface IDB
{
  r     : any,
  conn  : any
}

class Model
{
  protected db: IDB
  get DB (): IDB { return this.db }

  protected table: string
  get Table (): string { return this.table }

  constructor (db: IDB, table: string)
  {
    this.db = db
    this.table = table
  }
}

export { IDB, Model }
