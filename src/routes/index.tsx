
import React from 'react'
// import Stack from "./Stack";
import DrawerNavigator from './Drawer';
import { NavigationContainer } from '@react-navigation/native';




export default function () {
    return (
    <NavigationContainer>
       <DrawerNavigator/>
    </NavigationContainer>
    )
}