import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class TargetArea extends Component {
  state = { TargetArea: [] }



  componentWillMount() {
    axios.get('https://galvaniizereads.herokuapp.com/books')
      .then(response => this.setState({ TargetArea: response.data }))
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