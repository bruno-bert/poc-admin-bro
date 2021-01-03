"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canDeleteSalesItem = void 0;
var canDeleteSalesItem = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canDeleteSalesItem = canDeleteSalesItem;
