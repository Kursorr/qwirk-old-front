'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class Password {
    static hash(password, salt = 12) {
        return bcrypt.hash(password, salt);
    }
    static compare(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
exports.Password = Password;
