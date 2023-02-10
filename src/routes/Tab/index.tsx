import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Home } from "../../pages/Home";
import { Data } from "../../pages/Data";
import { Graphics } from "../../pages/Graphics";
import { Exams } from "../../pages/Exams";
import { Accont } from "../../pages/Account";


const Tab = createBottomTabNavigator();

export default function ShowBttomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#00A6ED",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Exams"
        component={Exams}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <MaterialCommunityIcons
                    name="clipboard-check-outline"
                    size={30}
                    color="black"
                  />
                  <Text>EXAMES</Text>
                </>
              );
            } else {
              return (
                <>
                  <MaterialCommunityIcons
                    name="clipboard-check-outline"
                    size={25}
                    color="black"
                  />
                  <Text>EXAMES</Text>
                </>
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="Data"
        component={Data}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={30}
                    color="black"
                  />
                  <Text>DADOS</Text>
                </>
              );
            } else {
              return (
                <>
                  <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={25}
                    color="black"
                  />
                  <Text>DADOS</Text>
                </>
              );
            }
          },
        }}
      />
     
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <AntDesign 
                    name="home"
                    size={30}
                    color="black"
                  />
                  <Text>HOME</Text>
                </>
              );
            } else {
              return (
                <>
                  <AntDesign 
                    name="home"
                    size={25}
                    color="black"
                  />
                  <Text>HOME</Text>
                </>
              );
            }
          },
        }}
      />
       <Tab.Screen
        name="Graphics"
        component={Graphics}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  <SimpleLineIcons
                    name="graph"
                    size={30}
                    color="black"
                  />
                  <Text>GRÁFICOS</Text>
                </>
              );
            } else {
              return (
                <>
                  <SimpleLineIcons
                    name="graph"
                    size={25}
                    color="black"
                  />
                  <Text>GRAFICOS</Text>
                </>
              );
            }
          },
        }}
      />

      <Tab.Screen
        name="Account"
        component={Accont}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <>
                  < FontAwesome
                    name="user"
                    size={30}
                    color="black"
                  />
                  <Text>CONTA</Text>
                </>
              );
            } else {
              return (
                <>
                  < FontAwesome
                    name="user"
                    size={25}
                    color="black"
                  />
                  <Text>CONTA</Text>
                </>
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
