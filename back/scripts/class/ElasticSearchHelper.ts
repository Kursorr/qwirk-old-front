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

  mapping () {
    const schema = {
      text: { type: 'text' }
    }

    return this.config.client.indices.putMapping({ index: this.config.index, type: this.config.type, body: { properties: schema } })
  }

  async resetIndex () {
    if (await this.config.client.indices.exists({ index: this.config.index })) {
      await this.config.client.indices.delete({ index: this.config.index })
    }

    await this.config.client.indices.create({ index: this.config.index })
    await this.mapping()
  }

  async readAndInsertData (messages) {
    try {
      await this.resetIndex()
      await this.insertData(messages)
    } catch (e) {
      console.error(e)
    }
  }

  async insertData (messages) {
    const bulkOps = []
    for (let i = 0; i < messages.length; i++) {
      bulkOps.push({ index: { _index: this.config.index, _type: this.config.type } })
       bulkOps.push({
         location: i,
         text: messages[i]
       })
    }
    await this.config.client.bulk({ body: bulkOps })
  }

  async getData (term: string, offset: number = 0) {
    const data = {
      from: offset,
      query: {
        match: {
          text: {
            query: term,
            operator: 'and',
            fuzziness: 'auto'
          }
        }
      },
      highlight: { fields: { text: {}}}
    }
    return data
  }

  async test () {
    const result = await this.config.client.search({
      index: this.config.index,
      type: this.config.type,
      body: {
        query: {
          match: {
            'text': 'hello'
          }
        }
      }
    })
    return result
  }
}

export { elasticSearchHelper }
