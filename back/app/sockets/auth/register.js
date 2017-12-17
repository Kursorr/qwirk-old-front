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
const fs = require("fs");
const indicative = require("indicative");
const nodemailer = require("nodemailer");
const User_1 = require("../../models/User");
const Hash_1 = require("../../../scripts/class/Hash");
const config_1 = require("../../../config/config");
const Helper_1 = require("../../../scripts/Helper");
const config_2 = require("../../../config/config");
const register = (instance, socket) => {
    socket.on('register', (data) => __awaiter(this, void 0, void 0, function* () {
        const { pseudo, email, password, confirm, file } = data;
        const { DB } = instance;
        const user = new User_1.User(DB);
        const isValid = yield indicative.validate(data, config_1.userRules)
            .then(() => true)
            .catch(err => {
            socket.emit('registration', {
                success: false,
                message: `${err[0].field} obligatoire`
            });
            return false;
        });
        if (!isValid)
            return;
        if (password !== confirm) {
            socket.emit('registration', {
                success: false,
                message: 'Mots de passe non identiques'
            });
            return false;
        }
        const cursor = yield user.filter({ email });
        const result = yield cursor.toArray();
        let emailAlreadyExist = '';
        if (result.length > 0)
            emailAlreadyExist = result[0].email;
        if (emailAlreadyExist === email) {
            socket.emit('registration', {
                success: false,
                message: 'Adresse email déjà existante'
            });
            return false;
        }
        const tag = Helper_1.randomTag();
        const verifAcc = Helper_1.randomText(16);
        const hPassword = yield Hash_1.Password.hash(password);
        const imgBuffer = file ? Helper_1.decodeBase64Image(file) : '';
        const uploadImgPath = Helper_1.imgPath(imgBuffer);
        const newUser = yield user.insert({
            pseudo,
            email,
            password: hPassword,
            tag,
            createdAt: new Date(),
            modifiedAt: new Date(),
            emailVerified: false,
            file: uploadImgPath,
            verifAcc
        });
        fs.writeFile(uploadImgPath, imgBuffer.data, () => { });
        if (newUser) {
            socket.emit('registration', {
                success: true,
                message: 'Un email vous a été envoyé afin de valider votre compte'
            });
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config_2.personalData.email,
                    pass: config_2.personalData.pwd
                }
            });
            let link = 'http://localhost/confirm-account?token=' + verifAcc + '&id=' + newUser.generated_keys[0];
            const mailOptions = {
                from: email,
                to: config_2.personalData.email,
                subject: 'Inscription Qwirk',
                html: "Bienvenue !<br> Cliquez sur le lien pour confirmer votre email.<br><a href=" + link + ">Valider mon compte</a>"
            };
            transporter.sendMail(mailOptions, {});
        }
    }));
};
exports.register = register;