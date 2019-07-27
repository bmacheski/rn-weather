import * as _ from 'lodash'
import Conditions from '../components/Conditions'
import React from 'react'
import WeatherContainer from '../components/WeatherContainer'
import { useWeather } from '../providers/WeatherProvider'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

function TodayScreen() {
  const { weather, loading } = useWeather()

  return (
    <WeatherContainer>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#white"
          style={styles.loadingIndicator}
        />
      ) : (
        <View>
          <ScrollView>
            {!_.isEmpty(weather) && (
              <View style={{ flex: 10 }}>
                <Conditions conditions={weather.currently} />
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </WeatherContainer>
  )
}

const styles = StyleSheet.create({
  currentTemp: {
    fontSize: 50,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: 'white' },
})

export default TodayScreen
