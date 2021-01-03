import { IsFunction } from "admin-bro"

export const canAddSalesItem: IsFunction | boolean =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}