'use strict'

import * as amqp from 'amqplib'
import * as chalk from 'chalk'

interface Data {
  protocol: string,
  hostname: string,
  port: number,
  username: string,
  password: string
}

class AmqpHelper {
  private readonly config: Data = {
    protocol: 'amqp',
    hostname: '17',
    port: 5672,
    username: 'guest',
    password: 'guest'
  }

  sendToAmqp (content) {
    const open = amqp.connect(this.config)
    open.then(conn => {
      return conn.createChannel()
    }).then(async ch => {
      const ex: string = 'logs'
      await ch.assertExchange(ex, 'fanout', {durable: false})
      await ch.publish(ex, '', Buffer.from(content))
    })
  }

  static getFromAmqp (queue) {
    const open = amqp.connect('amqp://guest:guest@172.18.0.5:5672') // IP RabbitMQ

    open.then(conn => {
      console.log(chalk.red('OPEN'))
      return conn.createChannel()
    }).then(async ch => {
      const q = queue

      console.log(chalk.red('YES !'))

      await ch.assertQueue(q, { durable: true })
      await ch.consume(q, msg => {
        console.log(" [x] Received %s", msg.content.toString());
      }, {noAck: true})
    }).catch(e => {
      console.log(chalk.red(e))
    })
  }
}

export { AmqpHelper }
