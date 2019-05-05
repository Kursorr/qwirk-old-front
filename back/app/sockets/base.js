'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Pusher = require("pusher");
const register_1 = require("./auth/register");
const profile_1 = require("./edit/profile");
const login_1 = require("./auth/login");
const tchat_1 = require("./tchat/tchat");
const base = (instance) => {
    const { IO } = instance;
    IO.on('connection', (socket) => {
        console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`);
        const pusher = new Pusher({
            appId: '775677',
            key: 'e0aa787b85b50bfa58eb',
            secret: 'b4f9d925b8463739fbe3',
            cluster: 'eu',
            useTLS: true
        });
        setTimeout(() => {
            console.log('opla!');
            pusher.trigger('my-channel', 'my-event', { "message": "hello world" });
        }, 5000);
        register_1.register(instance, socket);
        login_1.login(instance, socket);
        profile_1.profile(instance, socket);
        tchat_1.tchat(instance, socket);
        socket.on('disconnect', () => {
            console.log(`Customer disconnected id: ${socket.id} from port ${process.argv[2]}`);
        });
    });
};
exports.base = base;
