"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagModel = void 0;
var sequelize_1 = require("sequelize");
var connect_1 = require("../../../../databases/sequelize/connect");
exports.TagModel = connect_1.sequelize.define('Tags', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
// Other model options go here
});
