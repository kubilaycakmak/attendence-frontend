import { sendAxiosRequest } from '../helpers/axiosHelper';

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
