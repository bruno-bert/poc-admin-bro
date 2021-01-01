import { ResourceOptions } from 'admin-bro'
import { SalesParent } from '../../parents'
import { ItemsActions as actions } from './items-actions'

export const ItemsResource: ResourceOptions = {
  parent: SalesParent,
  properties: {
    SaleId: {
      reference: 'Sales',
      isDisabled: true
      
    },
    status: {
      availableValues: [
        {value: 'pending', label: 'Pending'},
        {value: 'completed', label: 'Completed'},
      ],
    },
  },
  actions
}
