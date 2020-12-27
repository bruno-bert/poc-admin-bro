"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.options = exports.features = void 0;
var user_features_1 = require("./user-features");
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return user_features_1.UserFeatures; } });
var user_resource_1 = require("./user-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return user_resource_1.UserResource; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.UserModel; } });
