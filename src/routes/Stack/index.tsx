import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShowBttomTabs from '../Tab'
//
import { Home } from '../../pages/Home'
import { Register } from '../../pages/Register'
import { SingsSymptoms } from '../../pages/SignsSymptoms'
import { Exams } from '../../pages/Exams'
import { Condition } from '../../pages/Condition'
import { Login } from '../../pages/Login'
import { AddExams } from '../../pages/AddExams'
import { TouchableOpacity } from 'react-native'
import { SimpleLineIcons,MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator()


export default function HomeNavigation (navigation:any) {
    return (
        <Stack.Navigator screenOptions={
            {
                headerShown:true,
                title:'Prevenir',
                headerLeft : () => (
            <TouchableOpacity onPress={()=> navigation.openDrawer()} activeOpacity={0.9} style={{margin: 10,paddingEnd:15}}>
                <SimpleLineIcons name="menu" size={25} color="black" />
            </TouchableOpacity> ),
            headerRight: () => (
                
            <TouchableOpacity  activeOpacity={0.9} style={{margin:10}}>
                <MaterialCommunityIcons name="bell-ring-outline" size={28} color="black" />
            </TouchableOpacity>
            ),

        }}>

              <Stack.Screen name='HomeIndex' component={ShowBttomTabs}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
          
            <Stack.Screen name='Condition'component={Condition}/>
            <Stack.Screen name='SingsSymptoms' component={SingsSymptoms}/>
            <Stack.Screen name='AddExams'component={AddExams}/>

        </Stack.Navigator>
    )
}


