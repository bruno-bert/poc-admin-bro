import { IsFunction } from "admin-bro"

export const canFilterSalesByUser: any =  ({ currentAdmin }) => {
    return currentAdmin  &&  ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj')  )  
}