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
const Message_1 = require("../models/Message");
const User_1 = require("../models/User");
const tchat = (instance, socket) => {
    const { DB } = instance;
    const message = new Message_1.Message(DB);
    const user = new User_1.User(DB);
    socket.on('SEND::MESSAGE', (data) => __awaiter(this, void 0, void 0, function* () {
        const convId = data.route.convId;
        const content = data.content;
        const userId = data.author.id;
        const cursorMessage = yield message.insert({
            convId,
            userId,
            content,
            postedAt: new Date()
        });
        if (cursorMessage) {
            socket.emit('updateMessage', {
                success: true,
                content
            });
        }
    }));
    socket.on('GET::MESSAGES', (convId) => __awaiter(this, void 0, void 0, function* () {
        const channelId = convId;
        console.log(channelId);
        const cursor = yield message.filter({ convId: channelId });
        const messages = yield cursor.toArray();
        console.log(messages);
        socket.emit('updateMessage', messages);
    }));
    socket.on('GET::CHANNELS', (userId) => __awaiter(this, void 0, void 0, function* () {
        console.log(userId);
    }));
};
exports.tchat = tchat;
