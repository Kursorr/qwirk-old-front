'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const socketio = require("socket.io");
class Socket {
    get IO() { return this.io; }
    get DB() { return this.db; }
    get Secret() { return this.secret; }
    constructor(http, db, secret) {
        this.http = http;
        this.db = db;
        this.secret = secret;
        const io = socketio(4000, {
            transports: ['websocket']
        });
        this.io = io;
    }
}
exports.Socket = Socket;
