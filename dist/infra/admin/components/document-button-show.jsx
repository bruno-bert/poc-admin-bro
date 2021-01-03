"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var design_system_1 = require("@admin-bro/design-system");
var DocumentButtonShow = function (props) {
    var record = props.record;
    return (<design_system_1.Button variant="primary" rounded>
        <design_system_1.Link style={{ color: '#FFF', textDecoration: 'none' }} target="blank" href={"//" + record.params.redirectUrl}>Download PDF</design_system_1.Link>
      </design_system_1.Button>);
};
exports.default = DocumentButtonShow;
