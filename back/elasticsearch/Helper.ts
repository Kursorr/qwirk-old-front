'use strict'

import * as elasticsearch from 'elasticsearch'
import * as log4js from "log4js"

const log = log4js.getLogger('api')

class elasticSearchHelper {
  private port: number
  private host: string  // Needs to be changed depending on the ip address given by docker...
  private readonly config: any
  private index: string = 'library'
  private type: string = 'novel'

  constructor (port = 9200, host = '172.18.0.3') {
    this.port = port
    this.host = host
    this.config = {
      index: this.index,
      type: this.type,
      client: new elasticsearch.Client({ host: { host, port} })
    }

    try {
      const health = this.config.client.cluster.health({})
      log.info(health)
    } catch (err) { console.log('Connection Failed, Retrying...', err) }
  }

  async putBookMapping () {
    const schema = {
      title: { type: 'keyword' },
      author: { type: 'keyword' },
      location: { type: 'integer' },
      text: { type: 'text' }
    }

    return this.config.client.indices.putMapping({ index: this.index, type: this.type, body: { properties: schema } })
  }

  async resetIndex () {
    if (await this.config.client.indices.exists({ index: this.index })) {
      await this.config.client.indices.delete({ index: this.index })
    }

    await this.config.client.indices.create({ index: this.index })
    await this.putBookMapping()
  }
}

export { elasticSearchHelper }
