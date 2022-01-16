import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    width: '80%',
    backgroundColor: theme.colorBgLight,
    borderColor: theme.colorPrimary,
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 18,
    color: theme.colorText1,
  },
});
