"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canPrintSales = void 0;
var canPrintSales = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canPrintSales = canPrintSales;
