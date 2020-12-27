"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionStore = void 0;
var express_session_1 = __importDefault(require("express-session"));
var env_1 = require("./env");
var connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
var syncDB = env_1.env.syncDB;
var SequelizeStore = connect_session_sequelize_1.default(express_session_1.default.Store);
var sessionStore = function (sequelize) {
    var store = new SequelizeStore({
        db: sequelize,
    });
    if (syncDB === 'true') {
        store.sync();
    }
    return store;
};
exports.sessionStore = sessionStore;
