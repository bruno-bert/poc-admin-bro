"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResource = void 0;
var parents_1 = require("../../parents");
exports.ProductResource = {
    parent: parents_1.ProductsParent,
    properties: {
        brandId: {
            reference: 'Brands',
            position: 10,
        },
        photos: {
            type: 'mixed',
        },
        description: {
            type: 'richtext',
            props: {
                quill: {
                    theme: 'bubble',
                    modules: {
                        toolbar: [['bold', 'italic'], ['link', 'image']],
                    }
                }
            }
        },
    },
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
};
