import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
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
});

export default styles;
