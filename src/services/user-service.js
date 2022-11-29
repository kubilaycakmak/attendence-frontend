import localStorageHelper from '../helpers/localStorageHelper';
import { sendAxiosRequest } from '../helpers/axiosHelper';

export const fetchProfileInfo = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/users/me`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const updateProfileInfo = async (data) => {
  const options = {
    method: 'PUT',
    url: `${process.env.REACT_APP_URL}/api/users/information-update`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
    data,
  };
  return await sendAxiosRequest(options);
};

export const sendVideoLike = async (videoId, isLike) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/users/videos/${videoId}/like`,
    params: {
      isLike,
    },
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };
  return await sendAxiosRequest(options);
};
