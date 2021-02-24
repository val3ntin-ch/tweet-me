import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: colors.gray4,
  },
  cardTitle: {
    fontStyle: 'italic',
    color: colors.darkGray,
    fontSize: 20,
  },
  messageStyle: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.darkGray,
    marginBottom: 10,
  },
  linkStyle: {
    color: colors.blue2,
    fontSize: 16,
    fontWeight: '700',
  },
  dateStyle: {
    marginTop: 5,
    color: colors.blue4,
    fontSize: 13,
    marginBottom: 10,
    alignSelf: 'flex-end',
    fontStyle: 'italic',
  },
});

export default styles;
