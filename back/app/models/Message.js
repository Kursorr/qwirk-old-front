"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
class Message extends Model_1.Model {
    get Data() {
        return this.data;
    }
    constructor(db, data = null) {
        super(db, 'messages');
        this.data = data;
    }
    insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).insert(data).run(this.db.conn);
        });
    }
    filter(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).filter(data).run(this.db.conn);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(id).update(data).run(this.db.conn);
        });
    }
}
exports.Message = Message;
