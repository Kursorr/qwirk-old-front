'use strict'

import * as bcrypt from 'bcrypt'
const saltRounds: number = 12

import { Socket } from '../scripts/Socket'
import { User } from '../models/User'

const auth = (instance: Socket, socket: any) => {
    const { DB } = instance

    socket.on('authenticate', (data) => {
        const { email, password, error } = data
        const user = new User(DB)
        let newPassword: string = '';

        bcrypt.hash(password, saltRounds, (err, hash) => {
            console.log(hash)
            newPassword = hash;
        })

        user.find('053881f9-39a0-4095-ac81-f72d37cf9cc6').then((res) => {
            let oldPassword = res.password
        }).catch((e) => {
            console.log(e)
        })
    })
}

export { auth }