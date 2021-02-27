import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray3,
  },
  logoContainer: {
    marginBottom: 120,
  },
  container: {
    width: '70%',
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  title: {
    color: colors.darkGray,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    color: colors.gray,
  },
  inputContainer: {
    borderBottomColor: colors.darkBlue,
  },
  inputError: {
    color: colors.red,
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  buttonTitle: {
    fontSize: 12,
    color: colors.blue4,
    fontWeight: '700',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  socialButton: {
    width: '90%',
    marginTop: 100,
  },
  socialButtonDisabled: {
    color: colors.gray,
  },
});

export default styles;
