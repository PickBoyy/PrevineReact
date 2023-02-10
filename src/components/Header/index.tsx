import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SimpleLineIcons,MaterialCommunityIcons } from "@expo/vector-icons";


const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.9} style={styles.aside}>
          <SimpleLineIcons name="menu" size={25} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Prevenir</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.bell}>
        <MaterialCommunityIcons name="bell-ring-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A6ED",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingBottom: 10,
    paddingEnd: 16,

    height: 120,
  },
  title: {
    fontSize: 26,
    color: "#000000",
    paddingStart: 20,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  aside: {},
  bell:{
    paddingStart:200,
  }
});
