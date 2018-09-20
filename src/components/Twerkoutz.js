import React from 'react'
import { View, Text } from 'react-native'
import UpperBody from './UpperBody'




const Workouts = ({twerk}) => {
  const workouts = twerk.map(twerk => {
    console.log(twerk)
    return (
      <Text>
        {twerk.workouts}
      </Text>
    )
  })
  return (
    <View>
      {workouts}
    </View>
  )
}
export default Workouts