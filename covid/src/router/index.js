import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../components';
import { Descriptions, Home, LinkPage, Location, Message, Splash } from '../pages';

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
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name='FAQ' component={Message} options={{headerShown: false}} />
            <Stack.Screen name='Descriptions' component={Descriptions} options={{headerShown: false}} />
            <Stack.Screen name='LinkPage' component={LinkPage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router