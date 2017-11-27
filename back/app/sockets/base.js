'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth");
const base = (instance) => {
    const { IO } = instance;
    IO.on('connection', (socket) => {
        console.log('A customer is connected');
        auth_1.auth(instance, socket);
        socket.on('disconnect', () => {
            console.log('A customer is disconnected');
        });
    });
};
exports.base = base;
