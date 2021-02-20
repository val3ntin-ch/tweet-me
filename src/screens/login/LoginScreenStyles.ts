import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#636469',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#636469',
  },
  inputContainer: {
    borderBottomColor: '#636469',
  },
  inputError: {
    color: '#e25050',
    fontSize: 13,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  buttonTitle: {
    fontSize: 12,
    color: '#00acee',
    fontWeight: '700',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  socialButton: {
    width: '90%',
    marginTop: 100,
  },
});

export default styles;
