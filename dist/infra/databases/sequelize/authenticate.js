"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = exports.authenticate = void 0;
var argon2_1 = __importDefault(require("argon2"));
var sequelize_1 = require("../../admin/resources/user/entities/sequelize");
var env_1 = require("./env");
var authenticate = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var user, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, sequelize_1.UserModel.findOne({
                    where: { email: email },
                })];
            case 1:
                user = _b.sent();
                _a = user;
                if (!_a) return [3 /*break*/, 3];
                return [4 /*yield*/, argon2_1.default.verify(user.encryptedPassword, password)];
            case 2:
                _a = (_b.sent());
                _b.label = 3;
            case 3:
                if (_a) {
                    return [2 /*return*/, __assign(__assign({}, user.toJSON()), { title: 'User', 
                            /** TODO - investigate how to get image from s3 to show in avatar */
                            avatarUrl: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=128&name=" + email, 
                            //avatarUrl: user.profilePhoto ? `https://dev-bruno-bert-bucket.s3.amazonaws.com/${user.profilePhoto.path}  as string : `https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=128&name=${email}`,
                            email: email })];
                }
                return [2 /*return*/, null];
        }
    });
}); };
exports.authenticate = authenticate;
var createAdmin = function () { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, _a, _b;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, sequelize_1.UserModel.findOne({
                    where: { email: env_1.env.admin_email },
                })];
            case 1:
                existingUser = _d.sent();
                if (!!existingUser) return [3 /*break*/, 4];
                _b = (_a = sequelize_1.UserModel).create;
                _c = {
                    email: env_1.env.admin_email,
                    role: 'admin',
                    firstName: 'Admin',
                    lastName: 'Admin'
                };
                return [4 /*yield*/, argon2_1.default.hash(env_1.env.admin_password)];
            case 2: return [4 /*yield*/, _b.apply(_a, [(_c.encryptedPassword = _d.sent(),
                        _c)])];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createAdmin = createAdmin;
