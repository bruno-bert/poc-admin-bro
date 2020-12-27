import { IsFunction } from "admin-bro"

export const canShowOrListUser: IsFunction | boolean =  ({ currentAdmin, record }) => {
    const recordUserId = record?.get('id')
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  || currentAdmin.id === recordUserId )  
}