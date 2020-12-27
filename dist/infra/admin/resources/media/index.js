"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.features = exports.options = void 0;
var media_resource_1 = require("./media-resource");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return media_resource_1.MediaResource; } });
Object.defineProperty(exports, "features", { enumerable: true, get: function () { return media_resource_1.MediaFeatures; } });
var sequelize_1 = require("./entities/sequelize");
Object.defineProperty(exports, "resource", { enumerable: true, get: function () { return sequelize_1.MediaModel; } });
