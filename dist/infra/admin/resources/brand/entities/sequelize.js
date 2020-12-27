"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandModel = void 0;
var sequelize_1 = require("sequelize");
var connect_1 = require("../../../../databases/sequelize/connect");
exports.BrandModel = connect_1.sequelize.define('Brands', {
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
}, {
// Other model options go here
});
