"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    port: process.env.PORT || 3000,
    cookie_name: process.env.COOKIE_NAME || 'somename',
    cookie_password: process.env.COOKIE_PASSWORD || 'somepass'
};
