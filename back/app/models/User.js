'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
var REASON;
(function (REASON) {
    REASON[REASON["NOT_FOUND"] = 0] = "NOT_FOUND";
    REASON[REASON["PASSWORD_MATCH"] = 1] = "PASSWORD_MATCH";
    REASON[REASON["ERROR"] = 2] = "ERROR";
})(REASON || (REASON = {}));
class User extends Model_1.Model {
    get Data() { return this.data; }
    constructor(db, data = null) {
        super(db, 'users');
        this.data = data;
    }
    find(id) {
        return new Promise((resolve, reject) => {
            this.db.r.table(this.name).get(id).run(this.db.conn).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }
}
exports.User = User;
