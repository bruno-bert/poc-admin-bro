"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canAddSales = void 0;
var canAddSales = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canAddSales = canAddSales;
