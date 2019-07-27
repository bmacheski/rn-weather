import * as _ from 'lodash'
import React from 'react'
import WeatherIcon from './WeatherIcon'
import { Currently } from '../types'
import { StyleSheet, Text, View } from 'react-native'
import Temperature from './Temperature'

interface ConditionsProps {
  conditions: Currently
}

function Conditions(props: ConditionsProps) {
  const { conditions } = props
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Today</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Text style={[styles.text, styles.currentTemp]}>
          <Temperature degrees={conditions.temperature} />
        </Text>
        <WeatherIcon name={conditions.icon} />
      </View>
      <View>
        <Text style={{ fontSize: 30, color: 'white', flexGrow: 10 }}>
          There is a {Math.round(props.conditions.precipProbability)}% chance of
          rain today.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  currentTemp: {
    fontSize: 50,
    flex: 2,
  },
  iconImage: {
    fontSize: 60,
    color: 'white',
  },
  text: { color: 'white' },
})

export default Conditions
