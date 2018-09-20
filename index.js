//import a library to help read a component

import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import TargetArea from './src/components/TargetArea'
import Workouts from './src/components/Workouts'
import Shapes from './src/components/Shapes'
import Twerkoutz from './src/components/Twerkoutz'
//
import { Actions } from 'react-native-router-flux'



//attemp to create a component
const App = () => {
  return (
    <View style={styles.ViewStyle}>
      <Header headerText={'Shapes Plus'} headerImage={'./logo.png'}  />
      <TargetArea />
      <Workouts />
    </View>
  )
}


const styles = {
  ViewStyle: {
    backgroundColor: '#aed137',
  },
}

//attempt to render a component
AppRegistry.registerComponent('flux', () => App)
AppRegistry.registerComponent('shapesapp', () => App)