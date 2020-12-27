import AdminBro, { AdminBroOptions } from 'admin-bro'
import * as UserAdmin from './resources/user'
import * as MediaAdmin from './resources/media'
import * as BrandAdmin from './resources/brand'
import * as ProductAdmin from './resources/product'
import * as TagAdmin from './resources/tag'


export const options: AdminBroOptions = {
  rootPath: '/admin',
  version: {
    admin: true,
  },
  branding: {
    companyName: 'Bariatric Surgery Sales Management - Johnson&Johnson Medical Devices',
  },
  dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: AdminBro.bundle('./components/dashboard')
  },
  resources: [
    UserAdmin,
    ProductAdmin,
    MediaAdmin,
    BrandAdmin,
    TagAdmin,
  ],
}