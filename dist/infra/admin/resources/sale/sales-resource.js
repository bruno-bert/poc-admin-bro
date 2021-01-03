"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesResource = void 0;
var admin_bro_1 = __importDefault(require("admin-bro"));
var parents_1 = require("../../parents");
var sales_actions_1 = require("./sales-actions");
exports.SalesResource = {
    parent: parents_1.SalesParent,
    listProperties: ['name', 'numberOfItems', 'salesDate', 'userId'],
    properties: {
        userId: {
            reference: 'Users',
            isVisible: { filter: true },
        },
        document: {
            type: 'mixed',
        },
        items: {
            reference: 'Items',
            components: {
                edit: admin_bro_1.default.bundle('../../../../../src/infra/admin/components/items-list-edit'),
                show: admin_bro_1.default.bundle('../../../../../src/infra/admin/components/items-list-show'),
            },
        },
    },
    actions: sales_actions_1.SalesActions
};
