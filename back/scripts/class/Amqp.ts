'use strict'

import * as amqp from 'amqplib'
import * as iyem from 'iyem'

class Amqp {
  private readonly user
  private readonly pass
  private readonly host
  private readonly port
  private readonly vh

  constructor (user, pass, host, port, vh) {
    this.user = user
    this.pass = pass
    this.host = host
    this.port = port
    this.vh = vh
  }

  async connect (exchange) {
    const dsn = `amqp://${this.user}:${this.pass}@${this.host}:${this.port}/${this.vh}`
    const conn = await amqp.connect(dsn)
    const channel = await conn.createChannel()

    await channel.assertExchange(exchange.name, exchange.type, exchange.options)
    return channel
  }

  async send(exchange, routingKey, content) {
    const channel = await this.connect(exchange)
    const buffer = new Buffer(JSON.stringify(content))

    await channel.publish(exchange.name, routingKey, buffer)
    await channel.close()
  }

  async get(exchange, routingKey, callback, qName = null) {
    const channel = await this.connect(exchange)

    let queue = null
    if (qName) {

    } else {
      queue = await channel.assertQueue('', { exclusive: true })
    }

    const queueName = queue.queue

    await channel.bindQueue(queueName, exchange.name, routingKey)
    await channel.consume(queueName, (msg) => {
      const content = JSON.parse(msg.content.toString('utf8'))
      callback(content, msg, queueName)
    }, { noAck: false })
  }

  static initExchange (name, type, options) {
    return {
      name,
      type,
      options
    }
  }
}

export { Amqp }
