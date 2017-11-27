'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
const redis = require("socket.io-redis");
class Socket {
    get IO() { return this.io; }
    get DB() { return this.db; }
    get Secret() { return this.secret; }
    constructor(http, db, secret) {
        this.http = http;
        this.db = db;
        this.secret = secret;
        const io = socketio(process.argv[3], {
            transports: ['websocket']
        }).adapter(redis({ host: 'localhost', port: 6379 }));
        this.io = io;
    }
}
exports.Socket = Socket;
