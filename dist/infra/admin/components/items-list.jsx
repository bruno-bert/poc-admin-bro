"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var design_system_1 = require("@admin-bro/design-system");
var admin_bro_1 = require("admin-bro");
var ItemsList = function (_a) {
    var items = _a.items;
    var viewHelper = new admin_bro_1.ViewHelpers();
    return (<design_system_1.Box mb="x4" variant="grey">
    <design_system_1.Label>Items Related to this Sales</design_system_1.Label>
      <design_system_1.Box variant="white">
       
      <design_system_1.Table>
     
  

     <design_system_1.TableHead>
      
       <design_system_1.TableRow>
        <design_system_1.TableCell>
           Item ID
         </design_system_1.TableCell>
         <design_system_1.TableCell>
           Completion Date
         </design_system_1.TableCell>
         <design_system_1.TableCell>
           Status
         </design_system_1.TableCell>
         <design_system_1.TableCell>
           Details
         </design_system_1.TableCell>
        
       </design_system_1.TableRow>
     </design_system_1.TableHead>


     <design_system_1.TableBody>
   
        {items === null || items === void 0 ? void 0 : items.map(function (item, index) {
        return (<design_system_1.TableRow key={index}>
            <design_system_1.TableCell>{item.id}</design_system_1.TableCell>
            <design_system_1.TableCell>{item.date}</design_system_1.TableCell>
            <design_system_1.TableCell><design_system_1.Badge>{item.status}</design_system_1.Badge></design_system_1.TableCell>          
            <design_system_1.TableCell> <design_system_1.Link href={viewHelper.editUrl("Items", item.id)}><design_system_1.Icon style={{ cursor: 'pointer' }} color="blue" icon="View" variant="24"/></design_system_1.Link> </design_system_1.TableCell>
            </design_system_1.TableRow>);
    })}

          
      

     </design_system_1.TableBody>

   </design_system_1.Table>
      </design_system_1.Box>
    </design_system_1.Box>);
};
exports.default = ItemsList;
