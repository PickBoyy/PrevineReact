import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowBttomTabs from '../Tab'
//
import { Register } from '../../pages/Register'
import { SingsSymptoms } from '../../pages/SignsSymptoms'
import { Condition } from '../../pages/Condition'
import { Login } from '../../pages/Login'
import { AddExams } from '../../pages/AddExams'
import { ChangeSignature } from '../../pages/ChangeSignature'

const Stack = createNativeStackNavigator()


export default function HomeNavigation () {
    return (
        <Stack.Navigator initialRouteName='HomeIndex' screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeIndex' component={ShowBttomTabs}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
            <Stack.Screen name='changeSignature' component={ChangeSignature}/>
            <Stack.Screen name='Condition'component={Condition}/>
            <Stack.Screen name='SingsSymptoms' component={SingsSymptoms}/>
            <Stack.Screen name='AddExams'component={AddExams}/>
        </Stack.Navigator>
    )
}


