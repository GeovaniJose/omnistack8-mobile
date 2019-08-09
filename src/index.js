/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Jessica</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
  }
})

export default App
