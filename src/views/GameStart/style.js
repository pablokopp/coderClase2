import {StyleSheet} from 'react-native';
import {bigNumber} from '../../constants/number';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: '100%',
    backgroundColor: theme.colorBgLight,
  },
  containerConfirmed: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 20,
  },
  textConfirmed: {
    fontSize: 18,
    color: theme.colorText2,
  },
  numberConfirmed: {
    ...bigNumber,
  },
});
