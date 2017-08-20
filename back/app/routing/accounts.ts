'use strict';

import * as express from 'express'
// import * as jwt from 'express-jwt'
// import * as token from 'jsonwebtoken'

import { User } from "../models/User"

const accounts = express.Router()

accounts.get('/', async (req, res) => {
  const user = new User(req.db)

  try {
    const userFind = await user.find('9a5bb3a5-e493-444f-8b6c-9745a55281b5')
    console.log(userFind)
    res.status(200).json({ message: userFind })
  } catch (err) {
    res.status(500).json({ message: 'PAS OK' })
  }
})

export { accounts }
