import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, Home, Message, Location, PageCovid1 } from '../pages'
import { BottomNavigator } from '../components';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}  />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='FAQ' component={Message} />
            <Tab.Screen name='Location' component={Location} />
        </Tab.Navigator>
    )
}
const Router = () => {
    return(
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name='FAQ' component={Message} options={{headerShown: false}} />
            <Stack.Screen name='Covid1' component={PageCovid1} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router