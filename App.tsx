import AppNavigator from './navigation/AppNavigator'
import React from 'react'
import { WeatherProvider } from './providers/WeatherProvider'

export default function App() {
  return (
    <WeatherProvider>
      <AppNavigator />
    </WeatherProvider>
  )
}
