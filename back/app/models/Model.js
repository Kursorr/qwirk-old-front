'use strict';
Object.defineProperty(exports, "__esModule", { value: true })
class Model {
    get DB() { return this.db }
    get Table() { return this.table }
    constructor(db, table) {
        this.db = db
        this.table = table
    }
}
exports.Model = Model
