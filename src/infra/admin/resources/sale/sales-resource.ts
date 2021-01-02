import AdminBro, { ResourceOptions } from 'admin-bro'
import { SalesParent } from '../../parents'
import { SalesActions as actions } from './sales-actions'

export const SalesResource: ResourceOptions = {
  parent: SalesParent,
  listProperties: ['name', 'numberOfItems', 'salesDate', 'userId'],
  properties: {
    userId: {
      reference: 'Users',      
    },

    document: {
      type: 'mixed',
    },

    items: {
      reference: 'Items',
     
      components: {
        edit: AdminBro.bundle('../../../../../src/infra/admin/components/items-list-edit'),
        show: AdminBro.bundle('../../../../../src/infra/admin/components/items-list-show'),
      },
    },
   
 
  },
  actions
}
