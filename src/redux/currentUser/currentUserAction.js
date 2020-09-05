import * as actionType from './currentUserActionType';

export const getCurrentUser = currentUser => ({
  type: actionType.CURRENT_USER,
  payload: currentUser
});