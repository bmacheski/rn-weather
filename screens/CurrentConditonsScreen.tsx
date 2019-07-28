import * as _ from 'lodash'
import Conditions from '../components/Conditions'
import React from 'react'
import WeatherContainer from '../containers/WeatherContainer'
import { Currently } from '../types/weather'
import { useWeather } from '../providers/WeatherProvider'

function CurrentConditionsScreen() {
  const { weather } = useWeather()
  const { currently = {} as Currently } = weather

  return (
    <WeatherContainer>
      <Conditions
        icon={currently.icon}
        rainChance={currently.precipProbability}
        temperature={currently.temperature}
      />
    </WeatherContainer>
  )
}

export default CurrentConditionsScreen
