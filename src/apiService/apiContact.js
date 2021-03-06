import axios from 'axios';

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      setToken(url, result.data.token);
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

function setToken(url, token) {
  if (url === '/users/login' || url === '/users/signup') {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  if (url === '/users/logout') {
    axios.defaults.headers.common.Authorization = '';
  }
}
