'use strict'

import * as bcrypt from 'bcrypt'

export class Password {
  static hash (password: string, salt: number = 12): Promise<string>
  {
    return bcrypt.hash(password, salt)
  }

  static compare (password: string, hash: string): Promise<string>
  {
    return bcrypt.compare(password, hash)
  }
}
