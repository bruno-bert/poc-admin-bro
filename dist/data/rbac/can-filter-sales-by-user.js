"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canFilterSalesByUser = void 0;
var canFilterSalesByUser = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj'));
};
exports.canFilterSalesByUser = canFilterSalesByUser;
