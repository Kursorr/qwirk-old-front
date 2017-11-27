'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (instance, socket) => {
    socket.on('authenticate', (data) => {
        console.log(data);
    });
};
exports.auth = auth;
