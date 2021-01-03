import { IsFunction } from "admin-bro"

export const canDeleteSales: IsFunction | boolean =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}