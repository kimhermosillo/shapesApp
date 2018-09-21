//import a library to help read a component

import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import TargetArea from './src/components/TargetArea'

//
import { Actions } from 'react-native-router-flux'



//attemp to create a component
const App = () => {
  return (
    <View style={styles.ViewStyle}>
      <Header headerText={'Shapes Plus'} headerImage={'./logo.png'}  />
      <TargetArea />
    
    </View>
  )
}



//attempt to render a component
AppRegistry.registerComponent('flux', () => App)
AppRegistry.registerComponent('shapesapp', () => App)