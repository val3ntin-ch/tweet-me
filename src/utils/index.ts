import moment from 'moment';

export const validateUsername = (username: string): boolean => /^@?([a-zA-Z0-9_]){1,15}$/.test(username);

export const formatDate = (value: string): string => moment(value).format('HH:mm - D.MM.YYYY');
