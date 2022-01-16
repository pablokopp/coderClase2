import {StyleSheet} from 'react-native';
import {bigNumber} from '../../constants/number';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
    backgroundColor: theme.colorSecondary,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    color: theme.colorText2,
  },
  number: {
    ...bigNumber,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
  },
});
