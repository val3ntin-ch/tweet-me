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
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    color: 'gray',
  },
  inputContainer: {
    borderBottomColor: 'gray',
  },
  inputErrorColor: {
    color: 'red',
  },
  buttonTitle: {
    fontSize: 12,
    color: 'gray',
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
