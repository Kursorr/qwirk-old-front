'use strict'

import * as elasticsearch from 'elasticsearch'

class elasticSearchHelper {
  private readonly port: number
  private readonly host: string  // Needs to be changed depending on the ip address given by docker...
  private readonly config: any
  private readonly index: string = 'data'
  private readonly type: string = 'novel'

  constructor (port = 9200, host = '172.18.0.3') {
    this.port = port
    this.host = host
    this.config = {
      index: this.index,
      type: this.type,
      client: new elasticsearch.Client({ host: { host, port} })
    }
  }

  async connect () {
    try { return await this.config.client.cluster.health({}) }
    catch (err) { console.error(err) }
  }

  putBookMapping () {
    const schema = {
      author: { type: 'keyword' },
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
