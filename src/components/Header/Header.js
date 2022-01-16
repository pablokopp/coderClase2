import {Text, View} from 'react-native';

import React from 'react';
import {styles} from './style.js';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
