import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Landing from './src/Landing'
import Search from './src/Search'
import { render } from 'react-dom';

export default function App() {

  const [currScreen, setCurrScreen] = useState('search')

  const renderScreen = () => {
    if (currScreen === 'landing') {
      return <Landing switcher={switchScreen} />
    } else if (currScreen === 'search') {
      return <Search switcher={switchScreen} />
    }
  }

  const switchScreen = (toScreen) => {
    setCurrScreen(toScreen)
  }

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 30,
  },

});
