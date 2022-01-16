import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  //el flex funciona igual que en web, lo que cambia son algunos valores default. Por default el display es flex, por lo que si yo le doy un flex 1 va a ocupar todo el espacio disponible. Variando ese valor de flex (valor<1) podria ir consiguiendo dif layaouts.

  //Si no le doy valor a flex, le puedo ir dando valores a flexGrow (dice que tanto mas crece despues de repartir el espacio entre los demas), flexShrink (que tanto se achica despues de repartir el espacio con los demas) y flexBasis(en este caso lo setea a un valor minimo que tiene que tener el componente, luego de ver el flexBasis es que se ve el Grow y el Shrink)
  container: {
    flexBasis: '10%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.colorPrimary,
    marginBottom: 25,
  },
  text: {
    fontSize: 30,
    color: theme.colorText1,
    fontFamily: 'MontserratAlternates-Black',
  },
});
