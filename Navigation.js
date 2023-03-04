import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from './Splash'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
const Navigation = () => {
    const stack = createNativeStackNavigator()
  return (
<stack.Navigator screenOptions={{headerShown:false}}>
    <stack.Screen name="Splash" component={Splash}/>
    <stack.Screen name="Welcome" component={Welcome}/>
    <stack.Screen name="Login" component={Login}/>
    <stack.Screen name="Dashboard" component={Dashboard}/>
</stack.Navigator>
  )
}

export default Navigation