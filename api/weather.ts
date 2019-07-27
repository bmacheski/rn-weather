import * as _ from 'lodash'
import { Weather } from '../types/weather'
import { DARK_SKY_API_KEY as api_key } from 'react-native-dotenv'

export async function getCurrentConditions(lat: number, long: number) {
  const response = await fetch(
    `https://api.darksky.net/forecast/${api_key}/${lat},${long}`,
  )
  const res = (await response.json()) as Weather
  return res
}
