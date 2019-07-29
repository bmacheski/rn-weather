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
  state: string
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
