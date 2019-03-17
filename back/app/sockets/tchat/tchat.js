"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Amqp_1 = require("../../../scripts/class/Amqp");
const Message_1 = require("../../models/Message");
const User_1 = require("../../models/User");
const tchat = (instance, socket) => {
    const { DB } = instance;
    const message = new Message_1.Message(DB);
    const user = new User_1.User(DB);
    socket.on('SEND::MESSAGE', (data) => __awaiter(this, void 0, void 0, function* () {
        const convId = data.route.convId;
        const content = data.content;
        const userId = data.author.id;
        const pseudo = data.author.pseudo;
        const avatar = data.author.avatar;
        const cursor = yield message.insert({
            convId,
            userId,
            avatar,
            pseudo,
            content,
            postedAt: new Date()
        });
        if (!cursor) {
            return;
        }
        const msg = yield message.get(cursor.generated_keys[0]);
        msg.user = yield user.get(msg.userId);
        const instanceAmqp = new Amqp_1.Amqp('guest', 'guest', '172.18.0.4', '5672', '');
        const exchange = Amqp_1.Amqp.initExchange('group', 'topic', { durable: false });
        yield instanceAmqp.send(exchange, convId, msg);
    }));
    socket.on('GET::MESSAGES', (convId) => __awaiter(this, void 0, void 0, function* () {
        const cursor = yield message.ascOrder('postedAt', { convId: parseInt(convId) });
        const messages = yield cursor.toArray();
        for (let message of messages) {
            message.user = yield user.get(message.userId);
        }
        socket.emit('updateMessage', messages);
    }));
    socket.on('GET::CHANNELS', (userId) => __awaiter(this, void 0, void 0, function* () {
        const cursor = yield user.getAllChannels(userId);
        const channels = yield cursor.toArray();
        socket.emit('updateChannel', channels);
    }));
};
exports.tchat = tchat;
