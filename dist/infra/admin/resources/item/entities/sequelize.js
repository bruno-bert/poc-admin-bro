"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModel = void 0;
var sequelize_1 = require("sequelize");
var connect_1 = require("../../../../databases/sequelize/connect");
var ItemsModel = connect_1.sequelize.define('Items', {
    // Model attributes are defined here
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
    },
    date: {
        allowNull: true,
        type: sequelize_1.DataTypes.DATE,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    SaleId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
// Other model options go here
});
exports.ItemsModel = ItemsModel;
