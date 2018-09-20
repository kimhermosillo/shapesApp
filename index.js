//import a library to help read a component

import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import TargetArea from './src/components/TargetArea'

//attemp to create a component
const App = () => (
  <View>
    <Header headerText={'Shapes Plus'}  />
    <TargetArea />
  </View>
)


//attempt to render a component

AppRegistry.registerComponent('shapesapp', () => App)