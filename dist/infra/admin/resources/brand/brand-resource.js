"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandResource = void 0;
var parents_1 = require("../../parents");
exports.BrandResource = {
    parent: parents_1.ProductsParent,
    actions: {
        show: {
            isAccessible: false,
        },
        edit: { showInDrawer: true },
        new: { showInDrawer: true },
    },
};
