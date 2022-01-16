import {TextInput, View} from 'react-native';

import React from 'react';
import {styles} from './style';

const Input = ({onChangeText, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={value => {
          onChangeText(value);
        }}
        {...props}
      />
    </View>
  );
};

export default Input;
