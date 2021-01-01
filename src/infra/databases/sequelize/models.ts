import { SalesModel } from '../../admin/resources/sale/entities/sequelize'
import { UserModel } from '../../admin/resources/user/entities/sequelize'
import { ItemsModel } from '../../admin/resources/item/entities/sequelize'

export type AvailableModels = 'User' |  'Sale' | 'Item' 

export const models: Record<AvailableModels, any> = {
  Sale: SalesModel,
  Item: ItemsModel,
  User: UserModel,
}