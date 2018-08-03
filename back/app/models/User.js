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
const Model_1 = require("./Model");
const Hash_1 = require("../../scripts/class/Hash");
var REASON;
(function (REASON) {
    REASON[REASON["NOT_FOUND"] = 0] = "NOT_FOUND";
    REASON[REASON["PASSWORD_MATCH"] = 1] = "PASSWORD_MATCH";
    REASON[REASON["ERROR"] = 2] = "ERROR";
})(REASON || (REASON = {}));
class User extends Model_1.Model {
    get Data() {
        return this.data;
    }
    constructor(db, data = null) {
        super(db, 'users');
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
    opt(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(id).update(data).run(this.db.conn);
        });
    }
    update(id, data, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursor = yield this.filter({ id });
            const { password: result } = yield cursor.next();
            if (password) {
                const verifPassword = yield Hash_1.Password.compare(password, result);
                if (verifPassword) {
                    return yield this.opt(id, data);
                }
                else {
                    throw new Error('Mot de passe invalide');
                }
            }
            else {
                return yield this.opt(id, data);
            }
        });
    }
    get(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.r.table(this.table).get(data).run(this.db.conn);
        });
    }
}
exports.User = User;
