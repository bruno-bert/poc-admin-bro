import { Sequelize } from 'sequelize'
import { env } from  './env'


const sequelizeUrl = [
  'postgres://', env.user, ':', env.password, '@', env.host, ':', env.port, '/', env.database,
].join('')


export const sequelize = new Sequelize(sequelizeUrl, {
  logging: false,
})

export const connect = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  if (env.syncDB === 'true') {
    await sequelize.sync({ force: true })
    console.log('Database has been synced.')
  }

  return sequelize
}

process.on('exit', () => {
  sequelize.close()
})