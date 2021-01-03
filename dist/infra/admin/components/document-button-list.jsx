"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var design_system_1 = require("@admin-bro/design-system");
var DocumentButtonList = function (props) {
    var record = props.record;
    //const [items, setItems] = useState([])
    /*  useEffect(() => {
       setItems(record.populated['items'] as any )
     }, [])  */
    var generatePDF = function (salesId) {
        console.log("printing document for sale " + salesId);
    };
    return (<design_system_1.Button onClick={function () { return generatePDF(record.params.id); }} size="icon" variant="primary" rounded>
        <design_system_1.Icon icon="Document"/>
      </design_system_1.Button>);
};
exports.default = DocumentButtonList;
