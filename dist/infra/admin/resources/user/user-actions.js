"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActions = void 0;
var can_modify_users_1 = require("../../../../data/rbac/can-modify-users");
var can_show_or_list_user_1 = require("../../../../data/rbac/can-show-or-list-user");
var modifyAction = { isAccessible: can_modify_users_1.canModifyUsers };
var showOrListAction = { isAccessible: can_show_or_list_user_1.canShowOrListUser };
exports.UserActions = {
    edit: modifyAction,
    delete: modifyAction,
    new: modifyAction,
    show: showOrListAction,
    list: showOrListAction
};
