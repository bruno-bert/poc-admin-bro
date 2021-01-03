import { IsFunction } from "admin-bro"

export const canAddSales: IsFunction | boolean =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}