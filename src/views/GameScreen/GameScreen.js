import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

import {styles} from './style';
import {theme} from '../../constants/colors';

const GameScreen = ({userOption, handleGoBack}) => {
  const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min) + 1;
    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    }
    return randomNumber;
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(0, 100, userOption),
  );
  // el profe crea la funcion en un archivo aparte y la importa a la view, yo esta vez no

  //el profe crea un componente aparte para el number, yo simplemente le paso los estilos que cree en una cosntante aparte
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>La suposicion del oponente</Text>
        <Text style={styles.number}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Menor" color={theme.colorPrimary} />
          <Button title="Mayor" color={theme.colorPrimary} />
        </View>
      </View>
      <Button
        title="Volver atras"
        color={theme.colorPrimary}
        onPress={() => handleGoBack()}
      />
    </>
  );
};

export default GameScreen;
