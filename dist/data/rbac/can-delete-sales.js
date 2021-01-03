"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canDeleteSales = void 0;
var canDeleteSales = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canDeleteSales = canDeleteSales;
