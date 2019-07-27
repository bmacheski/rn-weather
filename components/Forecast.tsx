import * as _ from 'lodash'
import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

interface ForecastProps {
  dailyItems: any[]
  title: string
  forecastItem: React.ElementType
}

function Forecast(props: ForecastProps) {
  const { forecastItem: ForecastItem } = props
  function renderHeader() {
    return <Text style={styles.text}>{props.title} Forecast</Text>
  }

  return (
    <FlatList
      data={props.dailyItems}
      ListHeaderComponent={renderHeader()}
      keyExtractor={(_, index) => 'forecast' + index}
      renderItem={({ item }) => <ForecastItem item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  text: { color: 'white', paddingHorizontal: 30, fontSize: 30 },
})

export default Forecast
