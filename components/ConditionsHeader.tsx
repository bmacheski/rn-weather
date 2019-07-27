import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

interface ConditionsHeaderProps {
  toggleSearchModal: () => void
  name: string
}

const ConditionsHeader = React.memo((props: ConditionsHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.citywrapper}>
        <Text style={styles.city}>{props.name}</Text>
      </View>
      <View style={styles.buttonwrapper}>
        <Ionicons
          name="md-add"
          onPress={props.toggleSearchModal}
          color="white"
          size={30}
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    flex: 2,
    flexDirection: 'row',
  },
  city: {
    color: 'white',
    fontSize: 20,
  },
  citywrapper: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonwrapper: {
    justifyContent: 'flex-end',
  },
})

export default ConditionsHeader
