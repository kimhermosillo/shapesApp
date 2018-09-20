import React from 'react'
import { View, Text } from 'react-native'

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


/*
const Workouts = ({data}) => {
    return(
        <View>
            <Text>
                {data}
            </Text>
        </View>
    )
}
*/
export default Shapes