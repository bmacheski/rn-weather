import * as _ from 'lodash'
import { LocationResult, LocationLookup } from '../types/geocode'
import { GEOCODE_API_KEY as api_key } from 'react-native-dotenv'

function filterAutocompleteResults(results: LocationResult[]) {
  return _.uniqBy(results, 'address.name')
}

export async function autocomplete(query: string) {
  const url = `https://api.locationiq.com/v1/autocomplete.php?key=${api_key}&q=${query}&countrycodes=us`
  const response = await fetch(`${url}`)
  const res = (await response.json()) as LocationResult[]
  return filterAutocompleteResults(res)
}

export async function lookup(lat: number, long: number) {
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${api_key}&lat=${lat}&lon=${long}&format=json`
  const response = await fetch(`${url}`)
  const res = (await response.json()) as LocationLookup
  return res
}
