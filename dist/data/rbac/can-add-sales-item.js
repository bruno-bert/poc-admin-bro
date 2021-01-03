"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canAddSalesItem = void 0;
var canAddSalesItem = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canAddSalesItem = canAddSalesItem;
