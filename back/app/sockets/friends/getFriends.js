"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
const User_1 = require("../../models/User");
const friends = (instance, socket) => {
    socket.on('GET::FRIENDS', (userId) => __awaiter(void 0, void 0, void 0, function* () {
        var e_1, _a;
        const { DB } = instance;
        const user = new User_1.User(DB);
        let total = {};
        let friends = [];
        const cursor = yield user.getFriends(userId);
        const obj = {
            pseudo: '',
            tag: '',
            avatar: '',
            status: '',
            requestedBy: ''
        };
        const friendsStatus = cursor.friends.map(({ status }) => status);
        const requestedBy = cursor.friends.map(({ requestedBy }) => requestedBy);
        let i = 0;
        try {
            for (var _b = __asyncValues(cursor.friends), _c; _c = yield _b.next(), !_c.done;) {
                const friend = _c.value;
                const cursorFriendData = yield user.getSpecificData(friend.to, 'pseudo', 'tag', 'avatar');
                const { pseudo, tag, avatar } = cursorFriendData;
                obj.pseudo = pseudo;
                obj.tag = tag;
                obj.avatar = avatar;
                obj.status = friendsStatus[i];
                obj.requestedBy = requestedBy[i];
                let three = Object.assign({}, obj, total);
                friends.push(three);
                i++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        socket.emit('getFriends', friends);
    }));
};
exports.friends = friends;
