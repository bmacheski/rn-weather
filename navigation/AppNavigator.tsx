import DailyScreen from '../screens/DailyScreen'
import HourlyScreen from '../screens/HourlyScreen'
import React from 'react'
import TodayScreen from '../screens/TodayScreen'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'

const Colors = {
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
}

function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}

const AppNavigator = createBottomTabNavigator(
  {
    Today: {
      path: '',
      screen: TodayScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-today' : 'md-today'}
          />
        ),
      },
    },
    Hourly: {
      path: 'hourly',
      screen: HourlyScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-time" />
        ),
      },
    },
    Daily: {
      path: 'daily',
      screen: DailyScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            focused={focused}
            name="calendar-week"
            size={26}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        ),
      },
    },
  },
  {
    backBehavior: 'history',
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  },
)

export default createAppContainer(AppNavigator)
