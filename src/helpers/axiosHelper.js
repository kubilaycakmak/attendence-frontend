import axios from 'axios';

export const sendAxiosRequest = async (options) => {
  try {
    const { data } = await axios(options);
    return { data, resultType: 'success' };
  } catch (error) {
    console.log('error:', error);
    return {
      data: { message: error.response.data.message },
      resultType: 'error',
    };
  }
};
