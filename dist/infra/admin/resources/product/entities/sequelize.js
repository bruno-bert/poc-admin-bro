"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
var sequelize_1 = require("sequelize");
var connect_1 = require("../../../../databases/sequelize/connect");
exports.ProductModel = connect_1.sequelize.define('Products', {
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
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    brandId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    photos: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: true,
    },
}, {
// Other model options go here
});
