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

export const forgetPassword = async (email) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/forgot-password`,
    data: { email },
  };
  return await sendAxiosRequest(options);
}

export const newPassword = async (token, password) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/new-password`,
    data: { token, password },
  };
  return await sendAxiosRequest(options);
}


// export const forget = (email) => {
//   return axios.post(`${process.env.REACT_APP_URL}/api/auth/forgot-password`, {
//     email,
//   });
// };

// export const newPassword = (id, password, token) => {
//   return axios.post(`${process.env.REACT_APP_URL}/api/auth/new-password`, {
//     id,
//     password,
//     token
//   });
// };
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

export const setFirstPassword = async (newPassword) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/auth/set-password`,
    data: {
      newPassword,
    },
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };

  return await sendAxiosRequest(options);
};
