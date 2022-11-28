import axios from 'axios';
import localStorageHelper from '../helpers/localStorageHelper';

export const fetchProfileInfo = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/users/me`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };
  const { data } = await axios(options);

  return data;
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
  const res = await axios(options);

  return res;
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
  const { data } = await axios(options);

  return data;
};
