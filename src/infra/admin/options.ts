import AdminBro, { AdminBroOptions } from 'admin-bro'
import * as UserAdmin from './resources/user'
/* import * as MediaAdmin from './resources/media'
import * as BrandAdmin from './resources/brand'
import * as ProductAdmin from './resources/product'
import * as TagAdmin from './resources/tag' */
import * as SalesAdmin from './resources/sale'


export const options: AdminBroOptions = {
  rootPath: '/admin',
  
  version: {
    admin: true,
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
   /*  ProductAdmin,
    MediaAdmin,
    BrandAdmin,
    TagAdmin, */
  ],
}