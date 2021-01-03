import { IsFunction } from "admin-bro"

export const canPrintSales: IsFunction | boolean =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}