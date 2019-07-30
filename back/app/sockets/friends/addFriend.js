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
const r = require("rethinkdb");
const addFriend = (instance, socket) => {
    socket.on('addFriend', (data) => __awaiter(this, void 0, void 0, function* () {
        const { user, friend } = data;
        console.log(user, friend);
        r.db('qwirk').table('users').filter({ pseudo: 'quenti77' });
        r.db('qwirk').table('users').get('308be1e2-946f-4219-bcfb-aea558f36617').update({ friends: r.row('friends').append({ 'zfzef': 'zefzef' }) });
    }));
};
exports.addFriend = addFriend;
