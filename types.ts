// Weather search
export interface Weather {
  latitude: number
  longitude: number
  timezone: string
  currently: Currently
  minutely: Minutely
  hourly: Hourly
  daily: Daily
  flags: Flags
  offset: number
}

export interface Currently {
  time: number
  summary: string
  icon: string
  nearestStormDistance?: number
  nearestStormBearing?: number
  precipIntensity: number
  precipProbability: number
  temperature: number
  apparentTemperature: number
  dewPoint: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  visibility: number
  ozone: number
  precipType?: string
}

export interface Daily {
  summary: string
  icon: string
  data: DailyDatum[]
}

export interface DailyDatum {
  time: number
  summary: string
  icon: string
  sunriseTime: number
  sunsetTime: number
  moonPhase: number
  precipIntensity: number
  precipIntensityMax: number
  precipIntensityMaxTime: number
  precipProbability: number
  precipType: string
  temperatureHigh: number
  temperatureHighTime: number
  temperatureLow: number
  temperatureLowTime: number
  apparentTemperatureHigh: number
  apparentTemperatureHighTime: number
  apparentTemperatureLow: number
  apparentTemperatureLowTime: number
  dewPoint: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windGustTime: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  uvIndexTime: number
  visibility: number
  ozone: number
  temperatureMin: number
  temperatureMinTime: number
  temperatureMax: number
  temperatureMaxTime: number
  apparentTemperatureMin: number
  apparentTemperatureMinTime: number
  apparentTemperatureMax: number
  apparentTemperatureMaxTime: number
}

export interface Flags {
  sources: string[]
  'nearest-station': number
  units: string
}

export interface Hourly {
  summary: string
  icon: string
  data: Currently[]
}

export interface Minutely {
  summary: string
  icon: string
  data: MinutelyDatum[]
}

export interface MinutelyDatum {
  time: number
  precipIntensity: number
  precipProbability: number
}

// Location search
export interface LocationResult {
  place_id: string
  osm_id: string
  osm_type: OsmType
  licence: string
  lat: string
  lon: string
  boundingbox: string[]
  class: string
  type: string
  display_name: string
  display_place: string
  display_address: string
  address: Address
}

export interface Address {
  name: string
  state: State
  country: Country
  country_code: CountryCode
  postcode: string
  house_number?: string
  road?: string
  suburb?: string
  city?: string
  neighbourhood?: string
}

export enum Country {
  UnitedStatesOfAmerica = 'United States of America',
}

export enum CountryCode {
  Us = 'us',
}

export enum State {
  Illinois = 'Illinois',
  Tennessee = 'Tennessee',
}

export enum OsmType {
  Node = 'node',
  Relation = 'relation',
  Way = 'way',
}

// Reverse lookup
export interface LocationLookup {
  address: LocationLookupAddress
  boundingbox: string[]
  display_name: string
  importance: number
  lat: string
  licence: string
  lon: string
  place_id: string
}

export interface LocationLookupAddress {
  city: string
  country: string
  country_code: string
  county: string
  house_number: string
  neighbourhood: string
  postcode: string
  road: string
  state: string
}
