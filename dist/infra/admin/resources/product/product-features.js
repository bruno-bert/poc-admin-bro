"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFeatures = void 0;
var upload_1 = __importDefault(require("@admin-bro/upload"));
exports.ProductFeatures = [
    upload_1.default({
        properties: {
            file: 'photos.file',
            filePath: 'photos.path',
            filename: 'photos.filename',
            filesToDelete: 'photos.toDelete',
            key: 'photos.bucketKey',
            mimeType: 'photos.mimeType',
            bucket: 'photos.bucket',
        },
        multiple: true,
        provider: {
            gcp: {
                bucket: process.env.PRODUCTS_BUCKET,
                expires: 0,
            },
        },
        validation: {
            mimeTypes: ['image/jpeg', 'image/png'],
        },
    }),
];
