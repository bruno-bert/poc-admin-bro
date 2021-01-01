import AdminBro, { AdminBroOptions } from 'admin-bro'
import * as UserAdmin from './resources/user'
import * as SalesAdmin from './resources/sale'
import * as ItemsAdmin from './resources/item'


export const options: AdminBroOptions = {
  rootPath: '/admin',
  
  version: {
    admin: false,
    app: "Bariatric Surgery Sales Management - Johnson&Johnson Medical Devices"
  },
  branding: {
    companyName: 'Bariatric Surgery Sales Management - Johnson&Johnson Medical Devices',
    softwareBrothers: false,
  },
 dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: AdminBro.bundle('../../../src/infra/admin/components/dashboard')
  },
  resources: [
    UserAdmin,
    SalesAdmin,
    ItemsAdmin
  ],
}