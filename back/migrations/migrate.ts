import * as r from 'rethinkdb'

import { database } from '../config/config'

const tables = ['users']

r.connect({db: database.db, host: database.host, port: database.port}, (err, conn) => {
  r.dbList().contains(database.db)
    .do(databaseExist => {
      return r.branch(databaseExist, {
        dbs_created: 0 },
        r.dbCreate(database.db)
      )
    }).run(conn);

  r(tables)
    .difference(r.db(database.db).tableList())
    .forEach(table => r.db(database.db).tableCreate(table))
    .run(conn)
})