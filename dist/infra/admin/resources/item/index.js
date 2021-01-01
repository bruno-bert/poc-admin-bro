"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.features = exports.resource = exports.options = void 0;
var items_resource_1 = require("./items-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return items_resource_1.ItemsResource; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.ItemsModel; } });
var items_features_1 = require("./items-features");
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return items_features_1.ItemsFeatures; } });
