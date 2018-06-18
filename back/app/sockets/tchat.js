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
const tchat = (instance, socket) => {
    socket.on('SEND::MESSAGE', (data) => __awaiter(this, void 0, void 0, function* () {
        const convId = data.route.convId;
        const content = data.content;
        const userId = data.author.id;
        const { DB } = instance;
        const message = new Message_1.Message(DB);
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
};
exports.tchat = tchat;
