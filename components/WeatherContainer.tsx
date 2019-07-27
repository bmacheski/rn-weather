import ConditionsHeader from './ConditionsHeader'
import React from 'react'
import SearchModal from './SearchModal'
import { StyleSheet, View } from 'react-native'

interface ContainerProps {
  children: React.ReactNode
}

function Container(props: ContainerProps) {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false)

  function toggleSearchModal() {
    setModalVisible(!modalVisible)
  }

  return (
    <React.Fragment>
      <SearchModal visible={modalVisible} onToggleModal={toggleSearchModal} />
      <View style={styles.container}>
        <ConditionsHeader toggleSearchModal={toggleSearchModal} />
        <View style={{ flex: 29 }}>{props.children}</View>
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
})

export default Container
