'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const saltRounds = 12;
const User_1 = require("../models/User");
const auth = (instance, socket) => {
    const { DB } = instance;
    socket.on('authenticate', (data) => {
        const { email, password, error } = data;
        const user = new User_1.User(DB);
        let newPassword = '';
        bcrypt.hash(password, saltRounds, (err, hash) => {
            console.log(hash);
            newPassword = hash;
        });
        user.find('053881f9-39a0-4095-ac81-f72d37cf9cc6').then((res) => {
            let oldPassword = res.password;
        }).catch((e) => {
            console.log(e);
        });
    });
};
exports.auth = auth;
