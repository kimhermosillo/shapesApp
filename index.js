//import a library to help read a component

import React from 'react'
import { Text, AppRegistry } from 'react-native'

//attemp to create a component
const App = () => (
  <Text>We're all gonna die anyways</Text>
)


//attempt to render a component

AppRegistry.registerComponent('shapesapp', () => App)
