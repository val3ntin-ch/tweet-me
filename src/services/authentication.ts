import axiosInstance from './axios';

const getUserId = async (username: string) => {
  console.log('test app username ', username);

  const { data } = await axiosInstance.get(`users/by?usernames=${username}`);
  console.log('test app data ', data);
  return data;
};
// const getUserId = async () => {
//   const { data } = await axiosInstance.get('users/by?usernames=elonmusk');

//   return data;
// };

export default getUserId;
