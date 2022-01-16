import {Text, View} from 'react-native';

import React from 'react';
import {styles} from './style.js';

const Title = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Title;
