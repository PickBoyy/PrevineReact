import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeNavigation from '../Stack'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen  name="DrawerHome" component={HomeNavigation}/>
        </Drawer.Navigator>
    )
}