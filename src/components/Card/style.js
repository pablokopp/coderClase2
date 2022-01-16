import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  //   el flex funciona igual que en web, lo que cambia son algunos valores default. Por default el display es flex, por lo que si yo le doy un flex 1 va a ocupar todo el espacio disponible. Variando ese valor de flex (valor<1) podria ir consiguiendo dif layaouts.

  //   Si no le doy valor a flex, le puedo ir dando valores a flexGrow (dice que tanto mas crece despues de repartir el espacio entre los demas), flexShrink (que tanto se achica despues de repartir el espacio con los demas) y flexBasis(en este caso lo setea a un valor minimo que tiene que tener el componente, luego de ver el flexBasis es que se ve el Grow y el Shrink)
  container: {
    flexGrow: 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: theme.colorSecondary,
    padding: 20,
    // elevation nos da el box-shadow en Android, ademas nos da una elevacion al estilo z-index con respecto a otros componentes
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: theme.colorText2,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
