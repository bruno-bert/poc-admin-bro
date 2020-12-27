import { Action, RecordActionResponse } from 'admin-bro'
//import { canModifyUsers } from '../../../../data/rbac/can-modify-users'
//import { canShowOrListUser } from '../../../../data/rbac/can-show-or-list-user'

//const modifyAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canModifyUsers }
//const showOrListAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canShowOrListUser }

export const SalesActions = {
   
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
}