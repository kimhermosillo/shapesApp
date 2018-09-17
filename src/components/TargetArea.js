import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class TargetArea extends Component {

  componentWillMount() {
    axios.get('https://galvaniizereads.herokuapp.com/books')
      .then(response => console.log(response))
  }

  render () {
    return (
      <View>
        <Text>Target Area!!!!!!!!</Text>
      </View>
    )
  }
}

export default TargetArea