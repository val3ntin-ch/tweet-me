import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray3,
  },

  listItemContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: colors.gray4,
    height: 100,
  },

  avatarContainer: {
    alignSelf: 'flex-start',
  },

  usernameContainer: {
    marginBottom: 5,
  },

  usernameStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.darkGray,
  },

  linkStyle: {
    color: colors.blue2,
    fontSize: 16,
    fontWeight: '700',
  },
  listItemTitle: {
    justifyContent: 'center',
    color: colors.darkBlue,
  },

  listItemSubtitle: {
    marginTop: 5,
    color: colors.blue4,
    fontSize: 13,
  },

  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyListPlaceholder: {
    fontWeight: '600',
    fontSize: 18,
    fontStyle: 'italic',
    color: colors.darkGray,
  },

  listContainer: {
    flexGrow: 1,
  },
});

export default styles;
