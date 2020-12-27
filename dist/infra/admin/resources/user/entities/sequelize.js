"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.Role = void 0;
var sequelize_1 = require("sequelize");
var sequelize_2 = require("../../../../databases/sequelize");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MEMBER"] = 1] = "MEMBER";
})(Role = exports.Role || (exports.Role = {}));
exports.UserModel = sequelize_2.sequelize.define('Users', {
    // Model attributes are defined here
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.UUIDV4,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    encryptedPassword: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    profilePhoto: {
        allowNull: true,
        type: sequelize_1.DataTypes.JSONB,
    },
    role: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: 'jnj' },
}, {
// Other model options go here
});
