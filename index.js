//import a library to help read a component

import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/components/header'
//attemp to create a component
const App = () => (
  <Header headerText={'Shapes Plus'} />
)


//attempt to render a component

AppRegistry.registerComponent('shapesapp', () => App)
