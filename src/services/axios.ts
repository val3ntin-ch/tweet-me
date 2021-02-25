import axios from 'axios';
import { TOKEN, API_URL } from './constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { Authorization: 'Bearer ' + TOKEN },
});

export default axiosInstance;
