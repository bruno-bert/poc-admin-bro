"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesActions = void 0;
//import { canModifyUsers } from '../../../../data/rbac/can-modify-users'
//import { canShowOrListUser } from '../../../../data/rbac/can-show-or-list-user'
//const modifyAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canModifyUsers }
//const showOrListAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canShowOrListUser }
exports.SalesActions = {
    exporter: {
        actionType: 'resource',
        icon: 'Export',
    },
    export: {
        actionType: 'resource',
        icon: 'DocumentExport',
        variant: 'light',
        parent: 'exporter',
    },
    import: {
        actionType: 'resource',
        icon: 'DocumentImport',
        variant: 'light',
        parent: 'exporter',
    },
};
