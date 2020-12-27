import { ProductModel } from '../../admin/resources/product/entities/sequelize'
import { UserModel } from '../../admin/resources/user/entities/sequelize'
import { BrandModel } from '../../admin/resources/brand/entities/sequelize'
import { MediaModel } from '../../admin/resources/media/entities/sequelize'

export type AvailableModels = 'User' |  'Brand' | 'Product' | 'Media'

export const models: Record<AvailableModels, any> = {
  Brand: BrandModel,
  Media: MediaModel,
  User: UserModel,
  Product: ProductModel,
}