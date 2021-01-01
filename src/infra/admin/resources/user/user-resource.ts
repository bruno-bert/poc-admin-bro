import { ResourceOptions } from 'admin-bro'
import { UserActions as actions } from './user-actions'

export const UserResource: ResourceOptions = {
  listProperties: ['firstName', 'email'],
  navigation: {
    name: null,
    icon: 'User',
  },
  
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    role: {
      availableValues: [
        {value: 'doctor', label: 'Doctor'},
        {value: 'jnj', label: 'JnJ'},
        {value: 'admin', label: 'Admin'},
      ],
    }
   
  },
  actions
}