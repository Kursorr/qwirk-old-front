'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// External modules
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const r = require("rethinkdb");
const log4js = require("log4js");
const Socket_1 = require("./app/scripts/Socket");
const base_1 = require("./app/sockets/base");
// Our routes
const auth_1 = require("./app/routing/auth");
// Env setting
const HTTP_PORT = parseInt(process.env.HTTP_PORT) || 1337;
const JWT_SECRET = process.env.JWT_SECRET || 'Qw1rkS3rv3r';
const DATABASE = process.env.DATABASE || 'qwirk';
// Creating logger
log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'server-api.log' }
    },
    categories: {
        'default': { appenders: ['out' /*, 'app'*/], level: 'debug' }
    }
});
// Get logger
const log = log4js.getLogger('api');
// Start app
log.debug('Loading API ...');
const app = express();
// CORS
const options = {
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
};
app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
log.debug(`Connecting to database : rethinkdb://127.0.0.1:28015/${DATABASE}`);
const connectDatabase = r.connect({ db: DATABASE });
connectDatabase.then((conn) => {
    log.info(`Connected to : rethinkdb://127.0.0.1:28015/${DATABASE}`);
    app.use((req, res, next) => {
        req.secretJWT = JWT_SECRET;
        req.db = { r, conn };
        // Auth token
        req.bearer = null;
        if (req.headers.authorization) {
            const auth = req.headers.authorization.split(' ');
            if (auth.length === 2 && auth[0] === 'bearer') {
                req.bearer = auth[1];
            }
        }
        res.log = log;
        next();
    });
    const server = http.createServer((req, res) => { });
    // Our Sockets
    const socket = new Socket_1.Socket(server, { r, conn }, JWT_SECRET);
    base_1.base(socket);
    // Our routes
    log.debug('Add paths for the API');
    app.get('/', (req, res) => {
        res.status(200).json({
            message: `Welcome to Qwirk API`
        });
    });
    app.use('/auth', auth_1.auth);
    app.post('/friends', (req, res) => {
        console.log(req.body);
        res.status(200).json(req.body);
    });
    // On lance l'application
    app.listen(HTTP_PORT, () => {
        log.info(`API running on port ${HTTP_PORT}`);
    });
});
connectDatabase.error((error) => {
    log.error(`Connection failed to : rethinkdb://127.0.0.1:28015/${DATABASE}`);
    log.error(`Reason : ${error}`);
});
