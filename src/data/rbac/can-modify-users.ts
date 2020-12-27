import { IsFunction } from "admin-bro"

export const canModifyUsers: IsFunction | boolean =  ({ currentAdmin  }) => {
        return currentAdmin  && (currentAdmin .role === 'admin'  || currentAdmin .role === 'jnj' )
}
