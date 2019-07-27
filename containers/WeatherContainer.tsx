import * as _ from 'lodash'
import ConditionsHeader from '../components/ConditionsHeader'
import React from 'react'
import SearchModal from '../components/SearchModal'
import { useWeather } from '../providers/WeatherProvider'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface ContainerProps {
  children: React.ReactNode
}

function Container(props: ContainerProps) {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)

  const { location, loading, weather } = useWeather()
  const dataIsEmpty = _.isEmpty(weather)

  function toggleSearchModal() {
    setModalVisible(!modalVisible)
  }

  function renderSpinner() {
    return (
      <ActivityIndicator
        size="large"
        color="#white"
        style={styles.loadingIndicator}
      />
    )
  }

  return (
    <React.Fragment>
      <SearchModal visible={modalVisible} onToggleModal={toggleSearchModal} />
      <View style={styles.container}>
        <ConditionsHeader
          toggleSearchModal={toggleSearchModal}
          name={location.address ? location.address.city : ''}
        />
        <View style={styles.content}>
          {loading || dataIsEmpty ? renderSpinner() : props.children}
        </View>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
    paddingVertical: 80,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    flex: 1,
  },
  content: { flex: 29 },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Container
