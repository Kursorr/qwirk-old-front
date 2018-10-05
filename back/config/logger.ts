import * as winston from 'winston'
// import * as elasticsearch from 'winston-elasticsearch'

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
})

