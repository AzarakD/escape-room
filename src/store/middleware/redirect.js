import browserHistory from 'browser-history';
import { ActionType } from 'const';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.RedirectToRoute) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
