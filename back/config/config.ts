import * as indicative from 'indicative'
import * as elasticsearch from 'elasticsearch'

const database: any = {
  db: 'qwirk',
	host: 'rethinkdb',
	port: 28015
}

const port: number = 9200
const host: string = '172.18.0.4' // Need to be changed
const elasticSearch: any = {
  index: 'library',
  type: 'novel',
  client: new elasticsearch.Client({ host: { host, port} })
}

const redis: any = {
	host: 'redis',
	port: '6379'
}

const JWT: string = 'Qw1rkS3rv3r'

const userRules: indicative.Rules = {
	pseudo: 'alpha_numeric|required|min:2|max:40',
	email: 'email|required|max:100',
	password: 'required|max:200'
}

const personalData: any = {
	email: 'websitesm06@gmail.com',
	pwd: 'ragnarOK06'
}

const path: any = {
  img: '/app/avatars/'
}

const levels: any = {
	error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}

export { database, elasticSearch, redis, JWT, userRules, personalData, path, levels }
