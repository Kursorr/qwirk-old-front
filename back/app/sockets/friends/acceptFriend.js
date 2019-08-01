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
const User_1 = require("../../models/User");
const acceptFriend = (instance, socket) => {
    socket.on('acceptFriend', (data) => __awaiter(this, void 0, void 0, function* () {
        const { DB } = instance;
        const userDb = new User_1.User(DB);
        const { user, friend, i } = data;
        const friendCursor = yield userDb.filter({ pseudo: friend });
        const requestedFriend = yield friendCursor.toArray();
        const existingRelationCursor = yield userDb.filterPluck(user, {
            from: user,
            to: requestedFriend[0].id
        });
        const existingRelation = yield existingRelationCursor.toArray();
        const existingRelationCursor2 = yield userDb.filterPluck(requestedFriend[0].id, {
            from: requestedFriend[0].id,
            to: user
        });
        const existingRelation2 = yield existingRelationCursor2.toArray();
        console.log(existingRelation);
        console.log(existingRelation2);
        // Need to fix index
        /*
          await userDb.updateFriend(user, i, {
            status: 1
          })
      
          await userDb.updateFriend(requestedFriend[0].id, i, {
            status: 1
          })
      
          socket.emit('acceptedFriend')
      
         */
    }));
};
exports.acceptFriend = acceptFriend;
