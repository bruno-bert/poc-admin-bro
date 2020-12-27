import { ResourceOptions } from 'admin-bro'

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
  },
}