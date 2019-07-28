import * as _ from 'lodash'
import * as GeocodeApi from '../api/geocode'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as WeatherApi from '../api/weather'
import React from 'react'
import { LocationLookup } from '../types/geocode'
import { Weather } from '../types/weather'

interface WeatherProviderProps {
  children?: React.ReactNode
}

interface WeatherProviderState {
  error: string
  loading: boolean
  weather: Partial<Weather>
  location: Partial<LocationLookup>
  setCoordinates: React.Dispatch<React.SetStateAction<Partial<Coordinates>>>
}

const defaultValue: WeatherProviderState = {
  error: '',
  loading: false,
  weather: {},
  location: {},
  setCoordinates: _.noop,
}

const WeatherContext = React.createContext<WeatherProviderState>(defaultValue)

export function WeatherProvider(props: WeatherProviderProps) {
  const [coordinates, setCoordinates] = React.useState<Partial<Coordinates>>({})

  const [forecast, setForecast] = React.useState<Partial<Weather>>({})

  const [location, setLocation] = React.useState<Partial<LocationLookup>>({})

  const [loading, setLoading] = React.useState<boolean>(false)

  const [error, setError] = React.useState<string>('')

  async function geolocate() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      setError('Permission to access location was denied!')
    }

    let location = await Location.getCurrentPositionAsync({})
    setCoordinates(location.coords)
  }

  async function intializeWeather() {
    if (!coordinates.latitude || !coordinates.longitude) return

    try {
      setLoading(true)

      const { latitude, longitude } = coordinates
      const weather = await WeatherApi.getCurrentConditions(latitude, longitude)
      setForecast(weather)

      const locationDetails = await GeocodeApi.lookup(latitude, longitude)
      setLocation(locationDetails)
    } catch (err) {
      setError('Uh oh. An error occurred.')
    } finally {
      setLoading(false)
    }
  }

  function getWeatherConsumerState() {
    return {
      error,
      location,
      loading,
      setCoordinates,
      weather: forecast,
    }
  }

  React.useEffect(() => {
    geolocate()
  }, [])

  React.useEffect(() => {
    intializeWeather()
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
