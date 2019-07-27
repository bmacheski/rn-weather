import * as _ from 'lodash'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

interface ConditionsHeaderProps {
  toggleSearchModal: () => void
}

function ConditionsHeader(props: ConditionsHeaderProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignContent: 'center',
          }}>
          {/* {name} */}
        </Text>
        <Ionicons
          name="md-add"
          onPress={props.toggleSearchModal}
          color="white"
          size={30}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    flex: 2,
  },
})

export default ConditionsHeader
