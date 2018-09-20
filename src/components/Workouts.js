import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'




class Workouts extends Component {
    state = { workouts: [] }


    componentWillMount() {
        axios.get('https://shapesserver.herokuapp.com/workouts')
            .then(response => {
                this.setState({ workouts: response.data })
            })

        render Workouts() {
            return this.state.workouts.map(workouts => )
        }

        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}

export default Workouts
