import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class Workouts extends Component {
    state = { workouts: [] }


    componentWillMount() {
        axios.get('https://shapesserver.herokuapp.com/workouts')
            .then(response => {
                this.setState({ workouts: response.data.shapes })
            })

        render Workouts() {
            const { shapes } = this.state.workouts
            if (this.state.targetarea.shapes) {
                console.log(shapes)
            }
        }

        render() {

        }

        return (
            <View>
                <Text>hello</Text>
                <Shapes shapes = {this.state.workouts} />
            </View>
        )
    }
}

export default Workouts
