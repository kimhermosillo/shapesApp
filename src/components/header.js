//import libraris for making a component
import React from 'react'
import { Text, View } from 'react-native'
//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#53e27e',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#010102',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
  },
}

//make the component available to other parts of the app
export default Header