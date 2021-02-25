import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray3,
  },
  cardContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  cardBody: {
    flex: 2,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: colors.darkGray,
  },
  cardInnerTitle: {
    fontWeight: 'bold',
    color: colors.blue4,
  },
  cardSubtitle: {
    fontSize: 18,
    color: colors.darkGray,
  },
  cardInnerSubtitle: {
    fontStyle: 'italic',
    color: colors.blue2,
  },
  buttonStyle: {
    color: colors.gray,
    fontSize: 24,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default styles;
