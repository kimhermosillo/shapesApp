import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class TargetArea extends Component {
  componentWillMount() {
    axios.get('https://shapesserver.herokuapp.com/targetarea')
      .then(response => console.log(response))
  }



  render() {
    return (
      <View>
        <Text>TARGET AREA</Text>
      </View>
    )
  }
}


export default TargetArea