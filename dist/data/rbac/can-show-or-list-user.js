"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canShowOrListUser = void 0;
var canShowOrListUser = function (_a) {
    var currentAdmin = _a.currentAdmin, record = _a.record;
    var recordUserId = record === null || record === void 0 ? void 0 : record.get('id');
    return currentAdmin && ((currentAdmin.role === 'admin' || currentAdmin.role === 'jnj') || currentAdmin.id === recordUserId);
};
exports.canShowOrListUser = canShowOrListUser;
