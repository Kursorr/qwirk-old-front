'use strict'

import * as jwt from 'jsonwebtoken'
import * as notifier from 'node-notifier'
import * as r from 'rethinkdb'
// import * as path from 'path'

import { User } from '../../models/User'
import { Socket } from '../../../scripts/class/Socket'
import { Password } from '../../../scripts/class/Hash'
import { ElasticSearch } from '../../../scripts/class/ElasticSearch'
import { Message } from '../../models/Message'

const login = (instance: Socket, socket: any ) => {
	socket.on('login', async (data) => {
		const { DB, Secret } = instance
		const findUser = new User(DB)
    const findMessages = new Message(DB)

		const { email, password } = data

		const cursor = await findUser.filter({ email })
		const result = await cursor.toArray()
		const user = result[0]

		if (!result.length) {
      socket.emit('connection', {
        success: false,
        message: 'Votre email ou votre mot de passe est incorrect.'
			})

      return false
    }

		const userID = result[0].id

		const verifPassword = await Password.compare(result[0].password, password)

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

    notifier.notify({
      title: 'Welcome !',
      message: `Hello ${user.pseudo}`,
      // icon: path.join(`${__dirname}/../../../avatars/${user.avatar}`),
      sound: true,
      wait: true
    }, (err, data) => {
      console.log('waited')
      console.log(err, data)
    })

		socket.emit('connection', {
			success: true,
			message: 'Vous êtes connecté ! Super !',
			token,
			user
		})

    const messages = await findMessages.filter(r.row('content'))
    const resultMsgs = await messages.toArray()
    const messagesToInsert = []

    for (let i = 0; i < resultMsgs.length; i++) {
      messagesToInsert.push({
        avatar: resultMsgs[i].avatar,
        pseudo: resultMsgs[i].pseudo,
        content: resultMsgs[i].content
      })
    }

    const health = await new ElasticSearch()
    await health.connect()
    await health.readAndInsertData(messagesToInsert)


    await findUser.update(userID, { token, tokenDeath: new Date(60 * 1000) })
	})
}

export { login }
