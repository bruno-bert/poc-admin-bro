"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var admin_bro_1 = require("admin-bro");
var design_system_1 = require("@admin-bro/design-system");
var api = new admin_bro_1.ApiClient();
var Dashboard = function () {
    var _a = react_1.useState({}), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        api.getDashboard().then(function (response) {
            setData(response.data);
        });
    }, []);
    return (<design_system_1.Box variant="grey">
      <design_system_1.Box variant="white">
        some dashboard
      </design_system_1.Box>
    </design_system_1.Box>);
};
exports.default = Dashboard;
