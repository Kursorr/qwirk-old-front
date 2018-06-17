"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const r = require("rethinkdb");
const process = require('process');
const config_1 = require("../config/config");
const tables = ['users', 'messages'];
r.connect({ db: config_1.database.db, host: config_1.database.host, port: config_1.database.port }, (err, conn) => {
    r.dbList().contains(config_1.database.db)
        .do(databaseExist => {
        return r.branch(databaseExist, {
            dbs_created: 0
        }, r.dbCreate(config_1.database.db));
    }).run(conn);
    r(tables)
        .difference(r.db(config_1.database.db).tableList())
        .forEach(table => r.db(config_1.database.db).tableCreate(table))
        .run(conn);
    process.exit(0);
});
