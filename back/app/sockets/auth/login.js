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
const jwt = require("jsonwebtoken");
const r = require("rethinkdb");
const User_1 = require("../../models/User");
const Hash_1 = require("../../../scripts/class/Hash");
const ElasticSearchHelper_1 = require("../../../scripts/class/ElasticSearchHelper");
const Message_1 = require("../../models/Message");
const login = (instance, socket) => {
    socket.on('login', (data) => __awaiter(this, void 0, void 0, function* () {
        const { DB, Secret } = instance;
        const findUser = new User_1.User(DB);
        const findMessages = new Message_1.Message(DB);
        const { email, password } = data;
        const cursor = yield findUser.filter({ email });
        const result = yield cursor.toArray();
        const user = result[0];
        if (!result.length) {
            socket.emit('connection', {
                success: false,
                message: 'Votre email ou votre mot de passe est incorrect.'
            });
            return false;
        }
        const userID = result[0].id;
        const verifPassword = yield Hash_1.Password.compare(result[0].password, password);
        if (!verifPassword) {
            socket.emit('connection', {
                success: false,
                message: 'Votre email ou votre mot de passe est incorrect.'
            });
            return false;
        }
        const token = jwt.sign({
            pseudo: result[0].pseudo,
            email: result[0].email,
            id: userID,
            tag: result[0].tag
        }, Secret, { expiresIn: 60 });
        /* notifier.notify({
          title: 'Welcome !',
          message: `Hello ${user.pseudo}`,
          // icon: path.join(`${__dirname}/../../../avatars/${user.avatar}`),
          sound: true,
          wait: true
        }, (err, data) => {
          console.log('waited')
          console.log(err, data)
        }) */
        socket.emit('connection', {
            success: true,
            message: 'Vous êtes connecté ! Super !',
            token,
            user
        });
        const messages = yield findMessages.filter(r.row('content'));
        const resultMsgs = yield messages.toArray();
        const messagesToInsert = [];
        for (let i = 0; i < resultMsgs.length; i++) {
            messagesToInsert.push(resultMsgs[i].content);
        }
        const health = yield new ElasticSearchHelper_1.elasticSearchHelper();
        yield health.connect();
        yield health.readAndInsertData(messagesToInsert);
        yield findUser.update(userID, { token, tokenDeath: new Date(60 * 1000) });
    }));
};
exports.login = login;
