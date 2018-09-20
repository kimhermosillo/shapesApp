import React from 'react'
import { View, Text } from 'react-native'
import UpperBody from './UpperBody'

const Shapes = ({ shapes }) => {

  const targetAreas = shapes.map( shape => {
    console.log(shape)
    return  (
      <Text>
        {shape.targetarea}
    
      </Text>
    )
  }) 
  return (
    <View>
      {targetAreas}

    </View>
  )
}


export default Shapes
