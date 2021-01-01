import { DataTypes, Model, UUIDV4 } from 'sequelize'
import { sequelize } from '../../../../databases/sequelize/connect'
import { ItemsModel } from '../../item/entities/sequelize'
import { SaleInterface } from '../sales-interface'

export interface SalesSequelizeInterface extends Model, SaleInterface {}

 const SalesModel = sequelize.define<SalesSequelizeInterface>('Sales', {
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  numberOfItems: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salesDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  document: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
}, {
  // Other model options go here
})

SalesModel.hasMany(ItemsModel)
export { SalesModel }
