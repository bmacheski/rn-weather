import * as _ from 'lodash'
import * as GeocodeApi from '../api/geocode'
import React from 'react'
import { LocationResult } from '../types/geocode'
import { useWeather } from '../providers/WeatherProvider'
import { Ionicons } from '@expo/vector-icons'
import {
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

interface SearchModalProps {
  visible: boolean
  onToggleModal: () => void
}

function SearchModal(props: SearchModalProps) {
  const { setCoordinates } = useWeather()

  const [results, setResults] = React.useState<LocationResult[]>([])

  const [input, setInput] = React.useState<string>('')

  const { visible, onToggleModal } = props

  async function handleInputChange() {
    if (!/^\w+$/.test(input) || !input || (input && input.length < 5)) return
    try {
      const res = await GeocodeApi.autocomplete(input)
      const geocodedResults = res && res.length ? res : []
      setResults(geocodedResults)
    } finally {
    }
  }

  function onCitySelect(lat: string, long: string) {
    const latitude = +lat
    const longitude = +long
    setCoordinates({ latitude, longitude })
    onToggleModal()
  }

  function renderSearchItem(item: LocationResult) {
    const { address } = item
    const city = address.city ? `${address.city},` : ''
    const name = address.name ? `${address.name},` : ''
    return (
      <Text style={styles.searchItem}>
        {name} {city} {item.address.state}
      </Text>
    )
  }

  React.useEffect(() => {
    handleInputChange()
  }, [input])

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchRow}>
          <Ionicons name="md-search" size={26} styles={styles.searchIcon} />
          <TextInput
            placeholderTextColor="#999"
            placeholder="Enter a zip or city name"
            value={input}
            onChangeText={setInput}
            underlineColorAndroid="#fff"
            autoCorrect={false}
            style={styles.searchInput}
            autoCapitalize="none"
          />
          <Ionicons name="md-close" size={26} onPress={onToggleModal} />
        </View>
        <View style={styles.searchResults}>
          <FlatList
            data={results}
            keyboardShouldPersistTaps="handled"
            keyExtractor={(_, index) => 'item' + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onCitySelect(item.lat, item.lon)}>
                {renderSearchItem(item)}
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchIcon: { alignItems: 'center' },
  searchInput: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 3,
    height: 45,
    marginHorizontal: 10,
    padding: 10,
    flexGrow: 5,
    fontSize: 20,
    width: '65%',
  },
  searchResults: {
    flex: 14,
  },
  searchRow: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  searchItem: {
    color: 'black',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 1,
    fontSize: 20,
    marginTop: -1,
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
})

export default SearchModal
