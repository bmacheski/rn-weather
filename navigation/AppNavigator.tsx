import CurrentConditionsScreen from '../screens/CurrentConditonsScreen'
import DailyForecastScreen from '../screens/DailyForecastScreen'
import HourlyForecastScreen from '../screens/HourlyForecastScreen'
import React from 'react'
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
      screen: CurrentConditionsScreen,
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
      screen: HourlyForecastScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name="md-time" />
        ),
      },
    },
    Daily: {
      path: 'daily',
      screen: DailyForecastScreen,
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
