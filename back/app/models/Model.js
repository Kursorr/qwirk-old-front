'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    get DB() { return this.db; }
    get Table() { return this.table; }
    constructor(db, table) {
        this.db = db;
        this.table = table;
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).insert(data).run(this.db.conn);
        });
    }
    getSpecificData(id, ...data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(id).pluck(['id', ...data]).run(this.db.conn);
        });
    }
}
exports.Model = Model;
