import { DataTypes, Model, UUIDV4 } from 'sequelize'
import { sequelize } from '../../../../databases/sequelize/connect'
import { SalesModel } from '../../sale/entities/sequelize'
import { ItemsInterface } from '../items-interface'

export interface ItemsSequelizeInterface extends Model, ItemsInterface {}

  
const ItemsModel = sequelize.define<ItemsSequelizeInterface>('Items', {
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  date: {
    allowNull: true,
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

   SaleId: {
    type: DataTypes.UUID,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }, 

}, {
  // Other model options go here
  

})

export { ItemsModel}

