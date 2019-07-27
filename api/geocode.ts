import { LocationResult } from '../types'
import { GEOCODE_API_KEY as api_key } from 'react-native-dotenv'

function buildUrl(query: string) {
  return `https://api.locationiq.com/v1/autocomplete.php?key=${api_key}&q=${query}`
}

export async function autocomplete(query: string) {
  const response = await fetch(`${buildUrl(query)}`)
  const res = (await response.json()) as LocationResult[]
  return res
}
