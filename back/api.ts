'use strict'

// External modules
import * as http from 'http'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as r from 'rethinkdb'
import * as log4js from 'log4js'

import { Socket } from './scripts/Socket'
import { base } from './app/sockets/base'

const configuration = require('./configuration.json')

// Env setting
const JWT_SECRET  : string = process.env.JWT_SECRET     || 'Qw1rkS3rv3r'
const DATABASE    : string = process.env.DATABASE       || configuration.database.db

// Creating logger
log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'server-api.log' }
    },
    categories: {
        'default': { appenders: [ 'out'/*, 'app'*/ ], level: 'debug' }
    }
})

// Get logger
const log = log4js.getLogger('api')

// Start app
log.debug('Loading API ...')
const app = express()

// CORS
const options = {
    'origin': true,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE'
}
app.use(cors(options))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

log.debug(`Connecting to database : rethinkdb://127.0.0.1:${configuration.database.port}/${DATABASE}`)
const connectDatabase = r.connect({ db: DATABASE })

connectDatabase.then((conn) => {
    log.info(`Connected to : rethinkdb://127.0.0.1:${configuration.database.port}/${DATABASE}`)

    app.use((req, res, next) => {
        req.secretJWT = JWT_SECRET
        req.db = { r, conn }

        // Auth token
        req.bearer = null
        if (req.headers.authorization) {
            const auth = req.headers.authorization.split(' ')
            if (auth.length === 2 && auth[0] === 'bearer') {
                req.bearer = auth[1]
            }
        }

        res.log = log
        next()
    })

    const server = http.createServer((req, res) => {})

    // Our Sockets
    const socket = new Socket(server, { r, conn }, JWT_SECRET)
    base(socket)

    // Our routes
    log.debug('Add paths for the API')
    app.get('/', (req, res) => {
        res.status(200).json({
            message: `Welcome to Qwirk API`
        })
    })

    app.post('/friends', (req, res) => {
        console.log(req.body)
        res.status(200).json(req.body)
    })

    // On lance l'application
    app.listen(process.argv[2], () => {
        log.info(`API running on port ${process.argv[2]}`)
    })
})

connectDatabase.error((error) => {
    log.error(`Connection failed to : rethinkdb://127.0.0.1:${configuration.database.port}/${DATABASE}`)
    log.error(`Reason : ${error}`)
})
