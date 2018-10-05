"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
// import * as elasticsearch from 'winston-elasticsearch'
exports.logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
