"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canModifyUsers = void 0;
var canModifyUsers = function (_a) {
    var currentAdmin = _a.currentAdmin;
    return currentAdmin && (currentAdmin.role === 'admin' || currentAdmin.role === 'jnj');
};
exports.canModifyUsers = canModifyUsers;
