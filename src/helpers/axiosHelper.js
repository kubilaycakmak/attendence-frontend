import axios from 'axios';

export const sendAxiosRequest = async (options) => {
  try {
    const { data } = await axios(options);
    return data;
  } catch (error) {
    console.log('error:', error);
  }
};
