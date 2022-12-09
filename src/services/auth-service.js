import { sendAxiosRequest } from '../helpers/axiosHelper';
import localStorageHelper from '../helpers/localStorageHelper';
export const register = async (username, full_name, password, email, type) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/signup`,
    data: {
      username,
      full_name,
      password,
      email,
      type,
    },
  };
  return await sendAxiosRequest(options);
};

export const login = async (email, password) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/login`,
    data: {
      email,
      password,
    },
  };
  return await sendAxiosRequest(options);
};

export const registerWithGoogle = async (accessToken) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/google-signup`,
    data: {
      accessToken,
    },
  };

  return await sendAxiosRequest(options);
};

export const loginWithGoogle = async (accessToken) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/google-login`,
    data: {
      accessToken,
    },
  };
  return await sendAxiosRequest(options);
};

export const setFirstPassword = async () => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/set-password`,
    data: {
      // accessToken,
    },
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };

  // maybe we need the jwt token
};
