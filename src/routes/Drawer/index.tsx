import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigation from '../Stack'
import { Accont } from "../../pages/Account";
import { FontAwesome } from '@expo/vector-icons'; 
import { AppContext } from "../../hooks/context";
import { Home } from "../../pages/Home";
import { CustomDrawer } from "../../components/CustomDrawer";

const {Navigator,Screen} = createDrawerNavigator()

export default function DrawerNavigator() {

    const {paciente} = useContext(AppContext)

    return (
        <Navigator initialRouteName="DrawerHome" 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{headerShown:false}}
        > 
            <Screen name="DrawerAccount" component={Accont}/>
            <Screen  name="DrawerHome" component={HomeNavigation}/>
            

        </Navigator>
    )
}