"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFeatures = exports.MediaResource = void 0;
var upload_1 = __importDefault(require("@admin-bro/upload"));
var parents_1 = require("../../parents");
var hideInEdit = { list: true, show: true, filter: true };
exports.MediaResource = {
    parent: parents_1.ContentParent,
    listProperties: ['uploadedFile', 'description', 'size', 'createdAt'],
    properties: {
        key: { isVisible: { list: true, show: true } },
        filename: { isVisible: hideInEdit },
        mimetype: { isVisible: hideInEdit },
        size: { isVisible: hideInEdit },
        bucket: { isVisible: hideInEdit },
    },
    actions: {
        show: { isAccessible: false },
        edit: {
            showInDrawer: true,
        },
        new: {
            showInDrawer: true,
        },
    },
};
exports.MediaFeatures = [upload_1.default({
        provider: {
            gcp: {
                bucket: process.env.MEDIA_BUCKET,
            },
        },
        properties: {
            key: 'key',
            bucket: 'bucket',
            mimeType: 'mimetype',
            size: 'size',
            filename: 'filename',
            file: 'uploadedFile',
        },
    })];
