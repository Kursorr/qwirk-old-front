'use strict';

import * as express from 'express'
// import * as jwt from 'express-jwt'
// import * as token from 'jsonwebtoken'

import { User } from "../models/User"

const auth = express.Router()

auth.get('/', async (req, res) => {
    const user = new User(req.db)

    user.find('053881f9-39a0-4095-ac81-f72d37cf9cc6').then((userFind) => {
        console.log(userFind)
        res.status(200).json({ message: userFind })
    }).catch((err) => {
        res.status(500).json({ message: 'PAS OK' })
    })
})

export { auth }