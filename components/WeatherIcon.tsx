import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

interface WeatherIconProps {
  name: string
  size?: number
}

export function renderIcon(icon: string) {
  const dict = {
    'clear-day': 'weather-sunny',
    rain: 'weather-rainy',
    sleet: 'weather-hail',
    wind: 'wind',
    fog: 'weather-fog',
    cloudy: 'weather-cloudy',
    'partly-cloudy-day': 'weather-partlycloudy',
    'clear-night': 'weather-night',
  }

  return dict[icon]
}

function WeatherIcon(props: WeatherIconProps) {
  const iconSize = props.size || 50

  if (props.name == 'partly-cloudy-night') {
    return (
      <Ionicons
        name="md-cloudy-night"
        style={styles.iconImage}
        size={iconSize}
      />
    )
  }

  return (
    <MaterialCommunityIcons
      style={styles.iconImage}
      name={renderIcon(props.name)}
      size={iconSize}
    />
  )
}

const styles = StyleSheet.create({
  iconImage: {
    color: 'white',
  },
})

export default WeatherIcon
