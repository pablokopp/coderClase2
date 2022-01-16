/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import GameScreen from './src/views/GameScreen/GameScreen';
import GameStart from './src/views/GameStart/GameStart';
import Header from './src/components/Header/Header';
import {theme} from './src/constants/colors';

const App = () => {
  const [userNumber, setUserNumber] = useState('');

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  const backToGameStart = () => {
    setUserNumber('');
  };
  let content = userNumber ? (
    <GameScreen userOption={userNumber} handleGoBack={backToGameStart} />
  ) : (
    <GameStart onStartGame={handleStartGame} />
  );

  return (
    <View style={styles.container}>
      <Header title="Adiviná el número" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorBgLight,
  },
});

export default App;
