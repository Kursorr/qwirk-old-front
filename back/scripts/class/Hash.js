'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const argon2 = require("argon2");
class Password {
    static hash(password) {
        return argon2.hash(password);
    }
    static compare(hash, password) {
        return argon2.verify(hash, password);
    }
}
exports.Password = Password;
