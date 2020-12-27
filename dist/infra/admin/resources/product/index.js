"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.features = exports.resource = exports.options = void 0;
var product_resource_1 = require("./product-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return product_resource_1.ProductResource; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.ProductModel; } });
var product_features_1 = require("./product-features");
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return product_features_1.ProductFeatures; } });
