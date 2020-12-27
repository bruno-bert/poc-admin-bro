import { Action, RecordActionResponse } from 'admin-bro'
import { canModifyUsers } from '../../../../data/rbac/can-modify-users'
import { canShowOrListUser } from '../../../../data/rbac/can-show-or-list-user'

const modifyAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canModifyUsers }
const showOrListAction: Partial<Action<RecordActionResponse>> =  { isAccessible: canShowOrListUser }

export const UserActions = {
  edit: modifyAction,
  delete: modifyAction,
  new: modifyAction,
  show: showOrListAction,
  list: showOrListAction
}