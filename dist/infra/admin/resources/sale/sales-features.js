"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesFeatures = void 0;
var upload_1 = __importDefault(require("@admin-bro/upload"));
var env_1 = require("../../../cdn/env");
exports.SalesFeatures = [
    upload_1.default({
        properties: {
            key: 'document.path',
            mimeType: 'document.mimeType',
            bucket: 'document.folder',
            size: 'document.size',
            filename: 'document.filename',
            file: 'document'
        },
        provider: {
            aws: {
                bucket: env_1.env.AWS_BUCKET,
                accessKeyId: env_1.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: env_1.env.AWS_SECRET_ACCESS_KEY,
                region: env_1.env.AWS_REGION,
            },
        },
        validation: {
            mimeTypes: ['application/pdf'],
        },
    }),
];
