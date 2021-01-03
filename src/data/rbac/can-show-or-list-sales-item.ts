import { IsFunction } from "admin-bro"

export const canShowOrListSalesItem: IsFunction | boolean =  ({ currentAdmin, record }) => {
    const recordUserId = record?.populated['SaleId']?.get('userId')
    return currentAdmin && recordUserId  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  || currentAdmin.id === recordUserId )  
}