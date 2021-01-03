import { IsFunction } from "admin-bro"

export const canShowOrListSales: IsFunction | boolean =  ({ currentAdmin, record }) => {
    const recordUserId = record?.get('userId')
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  || currentAdmin.id === recordUserId )  
}