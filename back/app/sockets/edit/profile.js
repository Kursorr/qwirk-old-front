'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const indicative = require("indicative");
const limiter_1 = require("limiter");
const fs = require("fs");
const User_1 = require("../../models/User");
const Hash_1 = require("../../../scripts/class/Hash");
const config_1 = require("../../../config/config");
const Helper_1 = require("../../../scripts/Helper");
const limiter = new limiter_1.RateLimiter(5, 'hour', true);
const profile = (instance, socket) => {
    socket.on('profile', (data) => __awaiter(this, void 0, void 0, function* () {
        const { DB } = instance;
        const user = new User_1.User(DB);
        const isValid = yield indicative.validate(data, config_1.userRules)
            .then(() => true)
            .catch(err => {
            socket.emit('profile', {
                success: false,
                message: `${err[0].field} obligatoire`
            });
            return false;
        });
        if (!isValid)
            return;
        const { pseudo, tag, email, password, newPassword } = data;
        const emailCursor = yield user.filter({ tag });
        const result = yield emailCursor.toArray();
        const userID = result[0].id;
        const verifPassword = yield Hash_1.Password.compare(password, result[0].password);
        if (!verifPassword) {
            socket.emit('profile', {
                success: false,
                message: 'Mot de passe invalide'
            });
            return false;
        }
        return limiter.removeTokens(1, (err, remainingRequests) => __awaiter(this, void 0, void 0, function* () {
            /*if (remainingRequests < 1) {
                return socket.emit('profile', {
                    success: false,
                    message: 'Vous changez vos informations trop rapidement, veuillez réessayer plus tard.'
                })
            }*/
            // Short-circuit Operators
            const preparedUser = {};
            pseudo && (preparedUser.pseudo = pseudo);
            email && (preparedUser.email = email);
            password && newPassword && (preparedUser.password = yield Hash_1.Password.hash(newPassword));
            let imgBuffer;
            if (data && data.avatar) {
                imgBuffer = data.avatar ? Helper_1.decodeBase64Image(data.avatar) : '';
                preparedUser.avatar = Helper_1.imgPath(imgBuffer);
                fs.writeFile(config_1.path.img + preparedUser.avatar, imgBuffer.data, () => { });
            }
            else {
                preparedUser.avatar = null;
            }
            const result = yield user.update(userID, preparedUser, password);
            result && socket.emit('profile', { success: true, avatar: preparedUser.avatar });
        }));
    }));
};
exports.profile = profile;
