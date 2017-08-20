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
const express = require("express");
// import * as jwt from 'express-jwt'
// import * as token from 'jsonwebtoken'
const User_1 = require("../models/User");
const accounts = express.Router();
exports.accounts = accounts;
accounts.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = new User_1.User(req.db);
    try {
        const userFind = yield user.find('9a5bb3a5-e493-444f-8b6c-9745a55281b5');
        console.log(userFind);
        res.status(200).json({ message: userFind });
    }
    catch (err) {
        res.status(500).json({ message: 'PAS OK' });
    }
}));
