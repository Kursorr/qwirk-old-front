"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch = require("elasticsearch");
const database = {
    db: 'qwirk',
    host: 'rethinkdb',
    port: 28015
};
exports.database = database;
const port = 9200;
const host = '172.18.0.3'; // Needs to be changed depending on the ip address given by docker...
const elasticSearch = {
    index: 'library',
    type: 'novel',
    client: new elasticsearch.Client({ host: { host, port } })
};
exports.elasticSearch = elasticSearch;
const redis = {
    host: 'redis',
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
const personalData = {
    email: 'websitesm06@gmail.com',
    pwd: 'ragnarOK06'
};
exports.personalData = personalData;
const path = {
    img: '/app/avatars/'
};
exports.path = path;
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5
};
exports.levels = levels;
