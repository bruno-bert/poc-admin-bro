import { Action, RecordActionResponse } from 'admin-bro'
import { canShowOrListSalesItem } from '../../../../data/rbac/can-show-or-list-sales-item'
import { canAddSalesItem } from '../../../../data/rbac/can-add-sales-item'
import { canDeleteSalesItem} from '../../../../data/rbac/can-delete-sales-item'




export const ItemsActions = {
    
    new:  { isAccessible: canAddSalesItem  },
    edit: {   isAccessible: canShowOrListSalesItem },
    show: {  isAccessible: canShowOrListSalesItem },
    delete:  { isAccessible: canDeleteSalesItem  },
    
   
    
 }