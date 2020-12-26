import { buildAuthenticatedRouter } from '@admin-bro/express'

import AdminBro from 'admin-bro'
import express from 'express'
import {env} from './env'

export const listen = (
  admin: AdminBro,
  sessionStore,
  authenticate,
  port = env.port,
): void => {
  const router = buildAuthenticatedRouter(admin, {
    cookieName: env.cookie_name,
    cookiePassword: env.cookie_password,
    authenticate,
  }, null, {
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })

  const app = express()

  app.use(admin.options.rootPath, router)
  app.use('/uploads', express.static('uploads'));

  app.use((error, req, res, next) => {
    if (error) {
      console.error(error)
    }
    next(error)
  })

  app.listen(port, () => console.log(`app is listening on http://localhost:${port}${admin.options.rootPath}`))
}