import DailyForecastItem from '../components/DailyForecastItem'
import Forecast, { RenderForecastItem } from '../components/Forecast'
import React from 'react'
import WeatherContainer from '../containers/WeatherContainer'
import { DailyDatum } from '../types/weather'
import { useWeather } from '../providers/WeatherProvider'
import { ScrollView } from 'react-native-gesture-handler'

function DailyForecastScreen() {
  const { weather } = useWeather()

  const renderDailyItem: RenderForecastItem<DailyDatum> = item => {
    return (
      <DailyForecastItem
        icon={item.icon}
        time={item.time}
        temperatureHigh={item.temperatureHigh}
        temperatureLow={item.temperatureLow}
      />
    )
  }

  return (
    <WeatherContainer>
      <ScrollView>
        <Forecast
          title="Daily"
          renderItem={renderDailyItem}
          forecastItems={weather.daily ? weather.daily.data : []}
        />
      </ScrollView>
    </WeatherContainer>
  )
}

export default DailyForecastScreen
