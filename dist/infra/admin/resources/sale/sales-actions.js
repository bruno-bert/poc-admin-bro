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
exports.SalesActions = void 0;
var admin_bro_1 = __importDefault(require("admin-bro"));
var sequelize_1 = require("../item/entities/sequelize");
var env_1 = require("../../../api/express/env");
var can_show_or_list_sales_1 = require("../../../../data/rbac/can-show-or-list-sales");
var can_add_sales_1 = require("../../../../data/rbac/can-add-sales");
var can_delete_sales_1 = require("../../../../data/rbac/can-delete-sales");
var print = function (request, response, data) { return __awaiter(void 0, void 0, void 0, function () {
    var fs, pdf, Handlebars, renderHtml, items, html, options, createPDF, result, fileUrl, notice, redirectUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fs = require('fs');
                pdf = require('html-pdf');
                Handlebars = require('handlebars');
                renderHtml = function (file, data) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                fs.readFile(file, function (err, content) {
                                    if (err)
                                        reject(err);
                                    var template = Handlebars.compile(content.toString());
                                    resolve(template(data));
                                });
                            })];
                    });
                }); };
                return [4 /*yield*/, sequelize_1.ItemsModel.findAll({ where: { SaleId: data.record.params.id }, raw: true })];
            case 1:
                items = _a.sent();
                console.log('items', items);
                return [4 /*yield*/, renderHtml('./templates/document.hbs', {
                        sale: data.record.params,
                        user: data.record.populated['userId'].params,
                        items: items
                    })];
            case 2:
                html = _a.sent();
                options = {
                    type: 'pdf',
                    format: 'A4',
                    orientation: 'portrait'
                };
                createPDF = function (html, options) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                pdf.create(html, options).toBuffer(function (err, buffer) {
                                    if (err)
                                        reject(err);
                                    resolve(buffer);
                                });
                            })];
                    });
                }); };
                return [4 /*yield*/, createPDF(html, options)];
            case 3:
                result = _a.sent();
                fileUrl = "public/documents/" + data.record.params.id + ".pdf";
                fs.writeFileSync(fileUrl, result);
                notice = { message: 'Click to download', type: 'success' };
                redirectUrl = String(env_1.env.server).replace('http://', '') + ":" + env_1.env.port + "/" + fileUrl;
                data.record.params = __assign(__assign({}, data.record.params), { notice: notice, redirectUrl: redirectUrl });
                return [2 /*return*/, {
                        record: data.record.toJSON(),
                    }];
        }
    });
}); };
var addItems = function (originalResponse, request, context) { return __awaiter(void 0, void 0, void 0, function () {
    var conditionToAddItems, itemIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                conditionToAddItems = String(request.method).toUpperCase() === 'POST'
                    && originalResponse.record
                    && !Object.keys(originalResponse.record.errors).length;
                if (!conditionToAddItems) return [3 /*break*/, 4];
                itemIndex = 0;
                _a.label = 1;
            case 1:
                if (!(itemIndex < originalResponse.record.params.numberOfItems)) return [3 /*break*/, 4];
                return [4 /*yield*/, sequelize_1.ItemsModel.create({
                        status: 'pending',
                        SaleId: originalResponse.record.params.id
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                itemIndex++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, originalResponse];
        }
    });
}); };
var getItems = function (originalResponse, request, context) { return __awaiter(void 0, void 0, void 0, function () {
    var salesId, items;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                salesId = ((_b = (_a = originalResponse.record) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.id) || ((_c = originalResponse.params) === null || _c === void 0 ? void 0 : _c.recordId);
                console.log('salesId', salesId);
                if (!salesId) return [3 /*break*/, 2];
                return [4 /*yield*/, sequelize_1.ItemsModel.findAll({ where: { SaleId: salesId } })];
            case 1:
                items = _d.sent();
                originalResponse.record.populated = __assign(__assign({}, originalResponse.record.populated), { items: items });
                return [2 /*return*/, originalResponse];
            case 2: return [2 /*return*/, originalResponse];
        }
    });
}); };
exports.SalesActions = {
    new: { after: addItems, isAccessible: can_add_sales_1.canAddSales },
    edit: { after: getItems, isAccessible: can_show_or_list_sales_1.canShowOrListSales },
    show: { after: getItems, isAccessible: can_show_or_list_sales_1.canShowOrListSales },
    delete: { isAccessible: can_delete_sales_1.canDeleteSales },
    print: {
        /* isAccessible: canPrintSales, */
        actionType: 'record',
        icon: 'Document',
        component: admin_bro_1.default.bundle('../../../../../src/infra/admin/components/document-button-show'),
        handler: print,
        showFilter: false,
    },
    list: {
        before: function (request, context) { return __awaiter(void 0, void 0, void 0, function () {
            var currentAdmin;
            return __generator(this, function (_a) {
                currentAdmin = context.currentAdmin;
                if (currentAdmin.role === 'admin' || currentAdmin.role === 'jnj') {
                    return [2 /*return*/, request];
                }
                else {
                    return [2 /*return*/, __assign(__assign({}, request), { query: __assign(__assign({}, request.query), { 'filters.userId': currentAdmin.id }) })];
                }
                return [2 /*return*/];
            });
        }); }
    }
};
