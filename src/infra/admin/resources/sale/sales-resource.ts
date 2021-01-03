import AdminBro, { ResourceOptions } from 'admin-bro'
import { SalesParent } from '../../parents'
import { SalesActions as actions } from './sales-actions'
import { canFilterSalesByUser } from '../../../../data/rbac/can-filter-sales-by-user'

export const SalesResource: ResourceOptions = {
  parent: SalesParent,
  listProperties: ['name', 'numberOfItems', 'salesDate', 'userId'],
  properties: {
    userId: {
      reference: 'Users',   
      isVisible: {filter: true},   
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
