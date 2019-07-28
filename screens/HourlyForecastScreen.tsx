import Forecast, { RenderForecastItem } from '../components/Forecast'
import HourlyForecastItem from '../components/HourlyForecastItem'
import React from 'react'
import WeatherContainer from '../containers/WeatherContainer'
import { Currently } from '../types/weather'
import { useWeather } from '../providers/WeatherProvider'
import { ScrollView } from 'react-native-gesture-handler'

function HourlyForecastScreen() {
  const { weather } = useWeather()

  const renderHourlyItem: RenderForecastItem<Currently> = item => {
    return (
      <HourlyForecastItem
        icon={item.icon}
        time={item.time}
        temperature={item.temperature}
      />
    )
  }

  return (
    <WeatherContainer>
      <ScrollView>
        <Forecast
          title="Hourly"
          renderItem={renderHourlyItem}
          forecastItems={weather.hourly.data}
        />
      </ScrollView>
    </WeatherContainer>
  )
}

export default HourlyForecastScreen
