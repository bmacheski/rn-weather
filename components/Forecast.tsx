import React, { ReactElement } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

export type RenderForecastItem<T> = (item: T) => ReactElement

export interface ForecastProps<T> {
  forecastItems: T[]
  title: string
  renderItem: RenderForecastItem<T>
}

function Forecast<T>(props: ForecastProps<T>) {
  function renderHeader() {
    return <Text style={styles.text}>{props.title} Forecast</Text>
  }

  return (
    <FlatList
      data={props.forecastItems}
      ListHeaderComponent={renderHeader()}
      keyExtractor={(_, index) => 'forecast' + index}
      renderItem={({ item }) => props.renderItem(item)}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    paddingHorizontal: 30,
    fontSize: 30,
  },
})

export default Forecast
