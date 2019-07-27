import * as _ from 'lodash'
import WeatherContainer from '../components/WeatherContainer'
import Forecast from '../components/Forecast'
import React from 'react'
import { useWeather } from '../providers/WeatherProvider'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'
import HourlyForecastItem from '../components/HourlyForecastItem'

function HourlyScreen() {
  const { weather } = useWeather()

  return (
    <WeatherContainer>
      <View>
        <ScrollView>
          <Forecast
            title="Hourly"
            forecastItem={HourlyForecastItem}
            dailyItems={weather.hourly.data}
          />
        </ScrollView>
      </View>
    </WeatherContainer>
  )
}

export default HourlyScreen
