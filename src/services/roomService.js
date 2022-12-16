import localStorageHelper from '../helpers/localStorageHelper';
import { sendAxiosRequest } from '../helpers/axiosHelper';

export const getRoomById = async (roomId) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/rooms/${roomId}`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const getReservationsByRoomId = async (roomId) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_URL}/api/rooms/${roomId}/reservations`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
  };
  return await sendAxiosRequest(options);
};

export const createRoomReservation = async (data) => {
  const options = {
    method: 'POST',
    url: `${process.env.REACT_APP_URL}/api/rooms/reservations`,
    headers: {
      authorization: `Bearer ${localStorageHelper('get', 'token')}`,
    },
    data,
  };
  return await sendAxiosRequest(options);
};
