import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as WeatherApi from '../api/weather'
import React from 'react'
import { Weather } from '../types'

export interface WeatherProviderProps {
  children?: React.ReactNode
}

export interface WeatherProviderState {
  loading: boolean
  weather: Partial<Weather>
}

const defaultValue: WeatherProviderState = {
  loading: false,
  weather: {},
}

export const WeatherContext = React.createContext<WeatherProviderState>(
  defaultValue,
)

/**
 * This should probably be extracted to hooks. A provider is really unncecessary.
 */
export function WeatherProvider(props: WeatherProviderProps) {
  const [coordinates, setCoordinates] = React.useState<Partial<Coordinates>>({})

  const [forecast, setForecast] = React.useState<Partial<Weather>>({})

  const [loading, setLoading] = React.useState<boolean>(false)

  async function geolocate() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      console.log('Permission to access location was denied!')
    }

    let location = await Location.getCurrentPositionAsync({})
    setCoordinates(location.coords)
  }

  async function getForecast() {
    if (!coordinates.latitude || !coordinates.longitude) return
    try {
      setLoading(true)
      const weather = await WeatherApi.getCurrentConditions(
        coordinates.latitude,
        coordinates.longitude,
      )
      setForecast(weather)
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  function getWeatherConsumerState() {
    return {
      loading,
      weather: forecast,
    }
  }

  React.useEffect(() => {
    geolocate()
  }, [])

  React.useEffect(() => {
    getForecast()
  }, [coordinates.latitude, coordinates.longitude])

  return (
    <WeatherContext.Provider value={getWeatherConsumerState()}>
      {props.children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  return React.useContext(WeatherContext)
}
