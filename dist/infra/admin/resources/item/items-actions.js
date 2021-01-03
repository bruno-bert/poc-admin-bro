"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsActions = void 0;
var can_show_or_list_sales_item_1 = require("../../../../data/rbac/can-show-or-list-sales-item");
var can_add_sales_item_1 = require("../../../../data/rbac/can-add-sales-item");
var can_delete_sales_item_1 = require("../../../../data/rbac/can-delete-sales-item");
exports.ItemsActions = {
    new: { isAccessible: can_add_sales_item_1.canAddSalesItem },
    edit: { isAccessible: can_show_or_list_sales_item_1.canShowOrListSalesItem },
    show: { isAccessible: can_show_or_list_sales_item_1.canShowOrListSalesItem },
    delete: { isAccessible: can_delete_sales_item_1.canDeleteSalesItem },
};
