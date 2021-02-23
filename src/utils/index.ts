import moment from 'moment';

const formatDate = (value: string): string => {
  return moment(value).format('HH:mm - D.MM.YYYY');
};

export default formatDate;
