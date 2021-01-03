import { IsFunction } from "admin-bro"

export const canDeleteSalesItem: IsFunction | boolean =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}