"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
var sequelize_1 = require("../../admin/resources/product/entities/sequelize");
var sequelize_2 = require("../../admin/resources/user/entities/sequelize");
var sequelize_3 = require("../../admin/resources/brand/entities/sequelize");
var sequelize_4 = require("../../admin/resources/media/entities/sequelize");
exports.models = {
    Brand: sequelize_3.BrandModel,
    Media: sequelize_4.MediaModel,
    User: sequelize_2.UserModel,
    Product: sequelize_1.ProductModel,
};
