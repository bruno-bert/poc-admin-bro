"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.features = exports.options = void 0;
var tag_resource_1 = require("./tag-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return tag_resource_1.options; } });
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return tag_resource_1.features; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.TagModel; } });
