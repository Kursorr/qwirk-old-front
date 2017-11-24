'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    get DB() { return this.db; }
    get Name() { return this.name; }
    constructor(db, name) {
        this.db = db;
        this.name = name;
    }
}
exports.Model = Model;
