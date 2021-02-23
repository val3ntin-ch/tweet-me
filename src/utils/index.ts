import moment from 'moment';

export const validateUsername = (username: string): boolean => {
  const pattern = new RegExp('^@?([a-zA-Z0-9_]){1,15}$');
  return pattern.test(username);
};

export const formatDate = (value: string): string => {
  return moment(value).format('HH:mm - D.MM.YYYY');
};

export default { formatDate, validateUsername };
