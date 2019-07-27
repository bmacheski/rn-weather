import React from 'react'
import Temperature from './Temperature'
import WeatherIcon from './WeatherIcon'
import { StyleSheet, Text, View } from 'react-native'

interface ConditionsProps {
  icon: string
  rainChance: number
  temperature: number
}

const Conditions = React.memo((props: ConditionsProps) => {
  const { icon, rainChance, temperature } = props

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 40 }]}>Today</Text>
      <View style={styles.contentwrapper}>
        <View style={styles.content}>
          <View style={styles.temperaturerow}>
            <Text style={[styles.text, styles.currentTemp]}>
              <Temperature degrees={temperature} />
            </Text>
            <WeatherIcon size={80} name={icon} />
          </View>
          <View>
            <Text style={{ fontSize: 30, color: 'white' }}>
              There is a {Math.round(rainChance)}% chance of rain today.
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  currentTemp: {
    fontSize: 50,
    flex: 1,
  },
  iconImage: {
    fontSize: 60,
    color: 'white',
  },
  content: {
    alignContent: 'center',
  },
  contentwrapper: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  temperaturerow: {
    flexDirection: 'row',
  },
  text: { color: 'white' },
})

export default Conditions
