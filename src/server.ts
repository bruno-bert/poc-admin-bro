const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')


const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)



//server

const express = require('express')
const app = express()

app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('Server started'))