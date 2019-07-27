import { LocationResult } from '../types'
import { GEOCODE_API_KEY as api_key } from 'react-native-dotenv'

export async function autocomplete(query: string) {
  const url = `https://api.locationiq.com/v1/autocomplete.php?key=${api_key}&q=${query}`
  const response = await fetch(`${url}`)
  const res = (await response.json()) as LocationResult[]
  return res
}

export async function lookup(lat: number, long: number) {
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${api_key}&lat=${lat}&lon=${long}&format=json`
  const response = await fetch(`${url}`)
  const res = await response.json()
  return res
}
