import * as _ from 'lodash'
import moment from 'moment'
import React from 'react'
import Temperature from './Temperature'
import WeatherIcon from './WeatherIcon'
import { DailyDatum } from '../types'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

interface DailyForecastItemProps {
  item: DailyDatum
}

function DailyForecastItem(props: DailyForecastItemProps) {
  const { item } = props

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.text}>{moment.unix(item.time).format('dddd')}</Text>
      </View>
      <View style={[styles.iconContainer, { alignItems: 'center' }]}>
        <WeatherIcon name={item.icon} />
        <Text style={[styles.text]}>
          <Feather name="arrow-up" />
          <Temperature degrees={item.temperatureHigh} />{' '}
          <Feather name="arrow-down" />
          <Temperature degrees={item.temperatureLow} />
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingVertical: 3,
    paddingLeft: 30,
    flexDirection: 'row',
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
  iconImage: {
    fontSize: 50,
    color: 'white',
  },
  text: { color: 'white', fontSize: 20 },
})

export default DailyForecastItem
