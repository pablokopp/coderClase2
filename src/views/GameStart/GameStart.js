import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';

import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import {styles} from './style';
import {theme} from '../../constants/colors';

const GameStart = ({onStartGame}) => {
  //numero del input
  const [number, setNumber] = useState('');
  //el confirmed es lo que me va a dar el switch de pantallas
  const [confirmed, setCofirmed] = useState(false);
  //numero elegido para jugar
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [startGame, setStartGame] = useState(false);

  //CHECKEAR ESTE ONCHANGE
  //FALTAValidacion para que sea numero no mas
  const handleOnChange = inputNumber => {
    setNumber(inputNumber);
  };
  //RESUELTO: le pase al card value=number y dsps a Input. Haciendo un spread de las props recibidas el Input lo acepto como prop directamente
  const handleOnClean = () => {
    setNumber('');
  };

  const handleOnConfirm = () => {
    //estoy haciendo validaciones para que no me ingresen cualquier cosa
    console.warn(`este es number antes: ${number}`);
    const choseNumber = parseInt(number);
    console.warn(`este es ChoseNumber  ${choseNumber}`);
    if (isNaN(choseNumber) || choseNumber < 0 || choseNumber > 100) {
      console.warn(`validaciones falladas`);
      return;
    }
    console.warn(`validaciones pasadas`);
    setCofirmed(true);
    setSelectedNumber(choseNumber);
    setNumber('');

    console.warn(`this is ${selectedNumber}`);
    console.warn(`Numero confirmado ${selectedNumber}`);
  };
  const handleStartGame = () => {
    onStartGame(selectedNumber);
    setStartGame(true);
  };
  const confirmedOutput = confirmed && (
    <View style={styles.containerConfirmed}>
      <Text style={styles.textConfirmed}>El numero elegido es </Text>
      <Text style={styles.numberConfirmed}>{selectedNumber}</Text>
      <Button
        title="Empezar juego"
        onPress={() => handleStartGame()}
        color={theme.colorPrimary}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Title text="Comenzar el juego" />
      <Card
        text="Elige tu número"
        handleOnChange={handleOnChange}
        handleOnConfirm={handleOnConfirm}
        handleOnClean={handleOnClean}
        //Ver el tema de este value, el text input me pide un string y le esta llegando numero, lo cual no me deja darle ese value al input
        value={number}
      />
      {confirmedOutput}
    </View>
  );
};

export default GameStart;
