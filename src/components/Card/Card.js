import {Button, Text, View} from 'react-native';

import Input from '../Input/Input.js';
import React from 'react';
import {styles} from './style.js';
import {theme} from '../../constants/colors.js';

const Card = ({
  text,
  handleOnConfirm,
  handleOnChange,
  handleOnClean,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Input
        autoComplete="off"
        placeholder="Escribe aquí"
        keyboardType="numeric"
        onChangeText={handleOnChange}
        value={value}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Limpiar"
          color={theme.colorPrimary}
          onPress={() => handleOnClean()}
        />
        <Button
          title="Confirmar"
          color={theme.colorPrimary}
          onPress={handleOnConfirm}
        />
      </View>
    </View>
  );
};

export default Card;
