"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResource = void 0;
var user_actions_1 = require("./user-actions");
exports.UserResource = {
    listProperties: ['firstName', 'email'],
    navigation: {
        name: null,
        icon: 'User',
    },
    properties: {
        encryptedPassword: {
            isVisible: false,
        },
        role: {
            availableValues: [
                { value: 'doctor', label: 'Doctor' },
                { value: 'jnj', label: 'JnJ' },
                { value: 'Admin', label: 'Admin' },
            ],
        }
    },
    actions: user_actions_1.UserActions
};
