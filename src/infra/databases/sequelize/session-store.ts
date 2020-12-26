import { Sequelize } from 'sequelize'
import session from 'express-session'
import { env } from  './env'

import connectSequelize from 'connect-session-sequelize'

const { syncDB } = env

const SequelizeStore = connectSequelize(session.Store)

export const sessionStore = (sequelize: Sequelize) => {
  const store = new SequelizeStore({
    db: sequelize,
  })

  if (syncDB === 'true') {
    store.sync()
  }

  return store
}