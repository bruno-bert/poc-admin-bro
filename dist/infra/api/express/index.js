"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listen = void 0;
var express_1 = require("@admin-bro/express");
var express_2 = __importDefault(require("express"));
var env_1 = require("./env");
var listen = function (admin, sessionStore, authenticate, port) {
    if (port === void 0) { port = env_1.env.port; }
    var router = express_1.buildAuthenticatedRouter(admin, {
        cookieName: env_1.env.cookie_name,
        cookiePassword: env_1.env.cookie_password,
        authenticate: authenticate,
    }, null, {
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
    });
    var app = express_2.default();
    /** TODO - turn this dinamic based on config of bucket type */
    //app.use('/uploads', express.static(__dirname + '/uploads'));
    app.use(admin.options.rootPath, router);
    app.use(function (error, req, res, next) {
        if (error) {
            console.error(error);
        }
        next(error);
    });
    app.listen(port, function () { return console.log("app is listening on http://localhost:" + port + admin.options.rootPath); });
};
exports.listen = listen;
