import React, { ReactNode, ReactElement } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

interface ForecastProps {
  forecastItems: any[]
  title: string
  renderItem: (item: any) => ReactElement
}

function Forecast(props: ForecastProps) {
  function renderHeader() {
    return <Text style={styles.text}>{props.title} Forecast</Text>
  }

  return (
    <FlatList
      data={props.forecastItems}
      ListHeaderComponent={renderHeader()}
      keyExtractor={(_, index) => 'forecast' + index}
      renderItem={props.renderItem}
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
