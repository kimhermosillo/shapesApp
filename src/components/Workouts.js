import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import Twerkoutz from './Twerkoutz'
// flux
import { Actions } from 'react-native-router-flux'

class Workouts extends Component {
    state = { workouts: [] }


    componentDidMount() {
        axios.get('https://shapesserver.herokuapp.com/workouts')
            .then(response => this.setState({ workouts: response.data.twerk }))
            }

        render Workouts = () => {
            const { twerk } = this.state.workouts
            if (this.state.targetarea.twerk) {
                console.log(twerk)
            }
        }

        render () {
        return (
            <View>
                <Text style={styles.welcome}>life sucks and then you die</Text>
                <Twerk twerk = {this.state.workouts} />
            </View>
        )
    }
}

export default Workouts
