"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.options = void 0;
var brand_resource_1 = require("./brand-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return brand_resource_1.BrandResource; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.BrandModel; } });
