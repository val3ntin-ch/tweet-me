import axios from 'axios';

const token =
  'AAAAAAAAAAAAAAAAAAAAAMS2MwEAAAAA0SAI7sg7HWiSxSrQPjiFh7RdHbQ%3DbfifQkK7yWUHsCNzqwQg5XkIQDGyVH3ss3raHZUUbb8oKuvSGu';

const axiosInstance = axios.create({
  baseURL: 'https://api.twitter.com/2/',
  timeout: 1000,
  headers: { Authorization: 'Bearer ' + token },
});

export default axiosInstance;
