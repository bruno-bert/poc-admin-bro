"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesResource = void 0;
var parents_1 = require("../../parents");
exports.SalesResource = {
    parent: parents_1.SalesParent,
    /** TODO - separate actions in other file */
    actions: {
        exporter: {
            actionType: 'resource',
            icon: 'Export',
        },
        export: {
            actionType: 'resource',
            icon: 'DocumentExport',
            variant: 'light',
            parent: 'exporter',
        },
        import: {
            actionType: 'resource',
            icon: 'DocumentImport',
            variant: 'light',
            parent: 'exporter',
        },
    },
    properties: {
        userId: {
            reference: 'Users',
            position: 10,
        },
        document: {
            type: 'mixed',
        },
    },
};
