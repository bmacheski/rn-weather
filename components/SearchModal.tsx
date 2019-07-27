import * as _ from 'lodash'
import * as GeocodeApi from '../api/geocode'
import React from 'react'
import { LocationResult } from '../types'
import { Ionicons } from '@expo/vector-icons'
import {
  Modal,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native'

interface SearchModalProps {
  visible: boolean
  onToggleModal: () => void
}

function SearchModal(props: SearchModalProps) {
  const [results, setResults] = React.useState<LocationResult[]>([])

  const [input, setInput] = React.useState<string>('')

  const { visible, onToggleModal } = props

  async function handleInputChange() {
    // TODO: Ignore whitespace
    if ((input && input.length < 5) || !input) return
    try {
      const res = await GeocodeApi.autocomplete(input)
      setResults(res)
    } finally {
    }
  }

  React.useEffect(() => {
    handleInputChange()
  }, [input])

  function renderSearchBarRow() {
    return (
      <View style={styles.container}>
        <View style={styles.searchRow}>
          <Ionicons name="md-search" size={26} styles={styles.searchIcon} />
          <TextInput
            placeholderTextColor="#999"
            placeholder="Enter a zip or city name"
            value={input}
            onChangeText={text => setInput(text)}
            underlineColorAndroid="#fff"
            autoCorrect={false}
            style={styles.searchInput}
            autoCapitalize="none"
          />
          <Ionicons
            name="md-close"
            size={26}
            onPress={onToggleModal}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.searchResults}>
          <FlatList
            data={results}
            keyExtractor={(_, index) => 'item' + index}
            renderItem={({ item }) => (
              <Text style={styles.searchItem}>
                {item.address.name}, {item.address.city}, {item.address.state}
              </Text>
            )}
          />
        </View>
      </View>
    )
  }

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      {renderSearchBarRow()}
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  searchIcon: { alignItems: 'center' },
  searchInput: {
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 3,
    height: 45,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 10,
    flexGrow: 5,
    fontSize: 20,
    width: '65%',
  },
  searchResults: {
    flex: 10,
    paddingHorizontal: 30,
  },
  searchRow: {
    flexDirection: 'row',
    flex: 1,
    padding: 3,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    fontSize: 20,
    marginTop: -1,
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
})

export default SearchModal
