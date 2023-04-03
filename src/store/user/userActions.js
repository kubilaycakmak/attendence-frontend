import { LOGIN } from './userActionTypes';

export const saveLoginData = (res) => {
  return {
    type: LOGIN,
    payload: { isAuth: true, res },
  };
};
