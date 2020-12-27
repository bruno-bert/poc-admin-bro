require('dotenv').config()

import AdminBro from 'admin-bro'
import AdminBroSequelize from '@admin-bro/sequelize'

import { connect, sessionStore, authenticate, createAdmin } from './infra/databases/sequelize'
import { listen } from "./infra/api/express"
import { options } from './infra/admin/options'

AdminBro.registerAdapter(AdminBroSequelize)

const run = async (): Promise<void> => {
  const sequelize = await connect()

  const admin = new AdminBro(options)

  await createAdmin()

  admin.watch()

  listen(admin, sessionStore(sequelize), authenticate)
}

run()