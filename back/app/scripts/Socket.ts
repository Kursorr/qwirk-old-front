'use strict';

import * as socketio from 'socket.io'
import { IDB } from '../models/Model'

class Socket {
    private http: any

    private io: any
    get IO(): any { return this.io }

    private db: IDB
    get DB(): IDB { return this.db }

    private secret: string
    get Secret(): string { return this.secret }

    constructor(http: any, db: IDB, secret: string) {
        this.http = http
        this.db = db
        this.secret = secret
        const io = socketio(4000, {
            transports: ['websocket']
        })

        this.io = io
    }
}

export { Socket }
