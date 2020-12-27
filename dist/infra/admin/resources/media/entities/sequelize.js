"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaModel = void 0;
var sequelize_1 = require("sequelize");
var sequelize_2 = require("../../../../databases/sequelize");
exports.MediaModel = sequelize_2.sequelize.define('Media', {
    // Model attributes are defined here
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
    },
    filename: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    },
    mimetype: {
        type: sequelize_1.DataTypes.STRING,
    },
    size: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    bucket: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
// Other model options go here
});
