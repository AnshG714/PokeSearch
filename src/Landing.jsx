import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { Button } from 'native-base'

const myBackground = require('../assets/landing.jpg')

const Landing = ({ switcher }) => {
  return (
    <View>
      <ImageBackground style={styles.bgStyle} source={myBackground}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>Welcome to PokeSearch!</Text>
          <Button style={styles.buttonStyle} onPress={() => { switcher('search') }}>
            <Text style={{ color: 'white' }}>Let's get started!</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleStyle: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 30,
    marginBottom: 30
  },

  buttonStyle: {
    justifyContent: 'center',
    width: '50%',
  },

  bgStyle: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
  }
})