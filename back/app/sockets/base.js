'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("./auth/register");
const profile_1 = require("./edit/profile");
const login_1 = require("./auth/login");
const tchat_1 = require("./tchat/tchat");
const Amqp_1 = require("../../scripts/class/Amqp");
const base = (instance) => {
    const { IO } = instance;
    IO.on('connection', (socket) => {
        console.log(`Customer connected id: ${socket.id} on port ${process.argv[2]}`);
        register_1.register(instance, socket);
        login_1.login(instance, socket);
        profile_1.profile(instance, socket);
        tchat_1.tchat(instance, socket);
        const instanceAmqp = new Amqp_1.Amqp('guest', 'guest', '172.18.0.4', '5672', '');
        const exchange = Amqp_1.Amqp.initExchange('group', 'topic', { durable: false });
        instanceAmqp.get(exchange, '2a81ba12-002a-488b-953d-cce15ebf25a1', (content, msg) => {
            console.log('1', msg.fields.routingKey);
            socket.emit('addMessage', content);
        });
        instanceAmqp.get(exchange, '49235b24-0e02-47e8-a100-0a22001827f2', (content, msg) => {
            console.log('2', msg.fields.routingKey);
            socket.emit('addMessage', content);
        });
        socket.on('disconnect', () => {
            console.log(`Customer disconnected id: ${socket.id} from port ${process.argv[2]}`);
        });
    });
};
exports.base = base;
