import * as _ from 'lodash'
import DailyForecastItem from '../components/DailyForecastItem'
import Forecast from '../components/Forecast'
import React from 'react'
import WeatherContainer from '../components/WeatherContainer'
import { useWeather } from '../providers/WeatherProvider'
import { ScrollView } from 'react-native-gesture-handler'

function DailyScreen() {
  const { weather } = useWeather()

  return (
    <WeatherContainer>
      <ScrollView>
        <Forecast
          title="Daily"
          forecastItem={DailyForecastItem}
          dailyItems={weather.daily.data}
        />
      </ScrollView>
    </WeatherContainer>
  )
}

export default DailyScreen
