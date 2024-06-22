import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import HomeStackNavigation from './HomeStackNavigation'
import FavoriteStackNavigation from './FavoriteStackNavigation'
import SearchStackNavigation from './SearchStackNavigation'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = (): JSX.Element => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="search"
                component={SearchStackNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="favorite"
                component={FavoriteStackNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="heart" size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
