"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canShowOrListSales = void 0;
var canShowOrListSales = function (_a) {
    var currentAdmin = _a.currentAdmin, record = _a.record;
    var recordUserId = record === null || record === void 0 ? void 0 : record.get('userId');
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj') || currentAdmin.id === recordUserId);
};
exports.canShowOrListSales = canShowOrListSales;
