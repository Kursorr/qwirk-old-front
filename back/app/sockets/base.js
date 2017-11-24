'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const base = (instance) => {
    const { IO } = instance;
    IO.on('connection', (socket) => {
        console.log('A customer is connected');
        socket.on('disconnect', () => {
            console.log('A customer is disconnected');
        });
    });
};
exports.base = base;
