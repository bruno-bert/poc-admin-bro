"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsResource = void 0;
var parents_1 = require("../../parents");
var items_actions_1 = require("./items-actions");
exports.ItemsResource = {
    parent: parents_1.SalesParent,
    properties: {
        SaleId: {
            reference: 'Sales',
            isDisabled: true
        },
        status: {
            availableValues: [
                { value: 'pending', label: 'Pending' },
                { value: 'completed', label: 'Completed' },
            ],
        },
    },
    actions: items_actions_1.ItemsActions
};
