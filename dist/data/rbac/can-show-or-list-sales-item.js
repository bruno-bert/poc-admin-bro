"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canShowOrListSalesItem = void 0;
var canShowOrListSalesItem = function (_a) {
    var _b;
    var currentAdmin = _a.currentAdmin, record = _a.record;
    var recordUserId = (_b = record === null || record === void 0 ? void 0 : record.populated['SaleId']) === null || _b === void 0 ? void 0 : _b.get('userId');
    return currentAdmin && recordUserId && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj') || currentAdmin.id === recordUserId);
};
exports.canShowOrListSalesItem = canShowOrListSalesItem;
