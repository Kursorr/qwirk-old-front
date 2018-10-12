'use strict'

import * as elasticsearch from 'elasticsearch'

interface Data {
  index: string,
  type: string,
  client: elasticsearch.Client
}

class elasticSearchHelper {
  private readonly config: Data = {
    index: 'data',
    type: 'novel',
    client: new elasticsearch.Client({ host: { host: '172.18.0.3', port: 9200} })
  }

  constructor () {}

  async connect () {
    try { return await this.config.client.cluster.health({}) }
    catch (err) { console.error(err) }
  }

  putBookMapping () {
    const schema = {
      author: { type: 'keyword' },
      text: { type: 'text' }
    }

    return this.config.client.indices.putMapping({ index: this.config.index, type: this.config.type, body: { properties: schema } })
  }

  async resetIndex () {
    if (await this.config.client.indices.exists({ index: this.config.index })) {
      await this.config.client.indices.delete({ index: this.config.index })
    }

    await this.config.client.indices.create({ index: this.config.index })
    await this.putBookMapping()
  }
}

export { elasticSearchHelper }
