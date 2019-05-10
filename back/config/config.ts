import * as indicative from 'indicative'

const database: any = {
  db: 'qwirk',
	host: '172.18.0.3',
	port: 28015
}

const redis: any = {
	host: '172.18.0.2',
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

export { database, redis, JWT, userRules, personalData, path, levels }
