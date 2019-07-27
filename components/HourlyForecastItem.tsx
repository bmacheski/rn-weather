import * as moment from 'moment'
import React from 'react'
import Temperature from './Temperature'
import WeatherIcon from './WeatherIcon'
import { StyleSheet, Text, View } from 'react-native'

interface HourlyForecastItemProps {
  temperature: number
  icon: string
  time: number
}

const HourlyForecastItem = React.memo((props: HourlyForecastItemProps) => {
  const { temperature, icon, time } = props

  return (
    <View style={styles.itemContainer}>
      <View style={styles.dayContainer}>
        <Text style={styles.text}>{moment.unix(time).format('hh:mm A')}</Text>
      </View>
      <View style={[styles.iconContainer, { alignItems: 'center' }]}>
        <WeatherIcon name={icon} />
        <Text style={[styles.text]}>
          <Temperature degrees={temperature} />
        </Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingVertical: 3,
    paddingLeft: 30,
    flexDirection: 'row',
    flex: 1,
  },
  currentDescription: {
    textTransform: 'capitalize',
  },
  currentTemp: {
    fontSize: 50,
  },
  dayContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 50,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  text: { color: 'white', fontSize: 20 },
})

export default HourlyForecastItem
