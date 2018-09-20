import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import Shapes from './Shapes'

class TargetArea extends Component {
  state = { targetarea: [] }

  componentDidMount() {
    axios.get('https://shapesserver.herokuapp.com/targetarea')
      .then(response => this.setState({ targetarea: response.data.shapes }))
  }

  renderTargetArea = () => {
    const { shapes } = this.state.targetarea
    if (this.state.targetarea.shapes) {
      console.log(shapes)
    }
  }


  render() {





    return (
      <View>
        <Text>hi</Text>
        <Shapes shapes={this.state.targetarea} />
      </View>
    )
  }
}



export default TargetArea