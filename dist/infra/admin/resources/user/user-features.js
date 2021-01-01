"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFeatures = void 0;
var passwords_1 = __importDefault(require("@admin-bro/passwords"));
var upload_1 = __importDefault(require("@admin-bro/upload"));
var env_1 = require("../../../cdn/env");
var argon2_1 = __importDefault(require("argon2"));
exports.UserFeatures = [
    passwords_1.default({
        properties: {
            encryptedPassword: 'encryptedPassword',
        },
        hash: argon2_1.default.hash,
    }),
    upload_1.default({
        properties: {
            key: 'profilePhoto.path',
            mimeType: 'profilePhoto.mimeType',
            bucket: 'profilePhoto.folder',
            size: 'profilePhoto.size',
            filename: 'profilePhoto.filename',
            file: 'profilePhoto'
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
            mimeTypes: ['image/jpeg', 'image/png'],
        },
    }),
];
