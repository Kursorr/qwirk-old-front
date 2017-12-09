"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database = {
    host: 'localhost',
    port: 28015,
    db: 'qwirk'
};
exports.database = database;
const redis = {
    host: 'localhost',
    port: '6379'
};
exports.redis = redis;
const JWT = 'Qw1rkS3rv3r';
exports.JWT = JWT;
const userRules = {
    pseudo: 'alpha_numeric|required|min:2|max:40',
    email: 'email|required|max:100',
    password: 'required|max:200'
};
exports.userRules = userRules;
