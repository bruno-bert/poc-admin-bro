"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModel = void 0;
var sequelize_1 = require("sequelize");
var connect_1 = require("../../../../databases/sequelize/connect");
var sequelize_2 = require("../../item/entities/sequelize");
var SalesModel = connect_1.sequelize.define('Sales', {
    // Model attributes are defined here
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    numberOfItems: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    salesDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    document: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
}, {
// Other model options go here
});
exports.SalesModel = SalesModel;
SalesModel.hasMany(sequelize_2.ItemsModel);
