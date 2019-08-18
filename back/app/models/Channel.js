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
class Channel extends Model_1.Model {
    constructor(db, data = null) {
        super(db, 'servers');
        this.data = null;
        this.data = data;
    }
    getMessages(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(id)('messages').run(this.db.conn);
        });
    }
    insertMessage(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(id).update({
                messages: this.db.r.row('messages').append(data)
            }).run(this.db.conn);
        });
    }
    getUsers(serverId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(serverId)('members').run(this.db.conn);
        });
    }
    getLastMessage(serverId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(serverId)('messages').nth(-1).run(this.db.conn);
        });
    }
}
exports.Channel = Channel;
