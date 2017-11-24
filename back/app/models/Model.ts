'use strict';

interface IDB
{
  r     : any,
  conn  : any
}

class Model
{
  protected db : IDB
  get DB () : IDB { return this.db }

  protected name : string
  get Name () : string { return this.name }

  constructor (db : IDB, name : string)
  {
    this.db = db
    this.name = name
  }
}

export { IDB, Model }
