"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("../models/Message");
const User_1 = require("../models/User");
const Channel_1 = require("../models/Channel");
const config_1 = require("../../config/config");
const tchat = (instance, socket) => {
    const { DB } = instance;
    const message = new Message_1.Message(DB);
    const user = new User_1.User(DB);
    const channel = new Channel_1.Channel(DB);
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
        let channelName = `ch-${convId}`;
        config_1.pusher.trigger(channelName, 'receive', {
            msg
        });
    }));
    socket.on('GET::MESSAGES', (convId) => __awaiter(this, void 0, void 0, function* () {
        const cursor = yield message.ascOrder('postedAt', { convId: convId });
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
    socket.on('GET::USERS', (channelId) => __awaiter(this, void 0, void 0, function* () {
        var e_1, _a;
        const cursor = yield channel.getUsers(channelId);
        const users = yield cursor.toArray();
        let obj = {
            pseudo: '',
            avatar: ''
        };
        let temp = {};
        let usersInChannel = [];
        try {
            for (var users_1 = __asyncValues(users), users_1_1; users_1_1 = yield users_1.next(), !users_1_1.done;) {
                const userId = users_1_1.value;
                const userData = yield user.getSpecificData(userId, 'pseudo', 'avatar');
                const { pseudo, avatar } = userData;
                obj.pseudo = pseudo;
                obj.avatar = avatar;
                let tempObject = Object.assign({}, obj, temp);
                usersInChannel.push(tempObject);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (users_1_1 && !users_1_1.done && (_a = users_1.return)) yield _a.call(users_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        socket.emit('getUsersFromChannel', usersInChannel);
    }));
};
exports.tchat = tchat;
