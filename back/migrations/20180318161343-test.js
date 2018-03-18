'use strict'

exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('users').run(connection)
  ])
}

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('users').run(connection)
  ])
}
