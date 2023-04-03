import localStorageHelper from '../helpers/localStorageHelper';
import { sendAxiosRequest } from '../helpers/axiosHelper';

export const getAllRooms = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/rooms/`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    }
  };
  return await sendAxiosRequest(options);
};

