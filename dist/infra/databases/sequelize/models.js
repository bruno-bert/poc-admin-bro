"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
var sequelize_1 = require("../../admin/resources/sale/entities/sequelize");
var sequelize_2 = require("../../admin/resources/user/entities/sequelize");
var sequelize_3 = require("../../admin/resources/item/entities/sequelize");
exports.models = {
    Sale: sequelize_1.SalesModel,
    Item: sequelize_3.ItemsModel,
    User: sequelize_2.UserModel,
};
