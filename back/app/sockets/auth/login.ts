'use strict'

import * as jwt from 'jsonwebtoken'

import { User } from '../../models/User'
import { Socket } from '../../../scripts/class/Socket'
import { Password } from '../../../scripts/class/Hash'

const login = (instance: Socket, socket: any ) => {
	socket.on('login', async (data) => {
		const { DB, Secret } = instance
		const findUser = new User(DB)

		const { email, password } = data

		const cursor = await findUser.filter({ email })
		const result = await cursor.toArray()
		const user = result[0]

		if (!result.length) return

		const userID = result[0].id

		const verifPassword = await Password.compare(password, result[0].password)

		if (!verifPassword) {
			socket.emit('connection', {
				success: false,
				message: 'Votre email ou votre mot de passe est incorrect.'
			})
			return false
		}

		const token = jwt.sign({
			pseudo: result[0].pseudo,
			email: result[0].email,
			id: userID,
			tag: result[0].tag
		}, Secret, { expiresIn: 60 })

		socket.emit('connection', {
			success: true,
			message: 'Vous êtes connecté !',
			token,
			user
		})

		await findUser.update(userID, { token, tokenDeath: new Date(60 * 1000) })
	})
}

export { login }
