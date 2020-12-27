import { Action, RecordActionResponse } from 'admin-bro'
import { canModifyUsers } from '../../../../data/rbac/can-modify-users'

const action: Partial<Action<RecordActionResponse>> =  { isAccessible: canModifyUsers }

export const UserActions = {
  edit: action,
  delete: action,
  new: action,
}