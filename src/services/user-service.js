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
