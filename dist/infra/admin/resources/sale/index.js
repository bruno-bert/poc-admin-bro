"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.features = exports.resource = exports.options = void 0;
var sales_resource_1 = require("./sales-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return sales_resource_1.SalesResource; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.SalesModel; } });
var sales_features_1 = require("./sales-features");
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return sales_features_1.SalesFeatures; } });
