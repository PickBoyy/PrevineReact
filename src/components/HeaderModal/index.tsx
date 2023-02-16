import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

type MyProps = {
  title:string,
}

export function HeaderModal(props:MyProps) {
  return (
    <View style={styles.container}>
      <View style={styles.placeTitle}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <TouchableOpacity style={styles.placeIcon}>
        <SimpleLineIcons name="note" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },

  placeTitle:{
    display: 'flex',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding:10,
    paddingStart:45
  },

  title:{
    fontWeight:'bold',
    fontSize:17,
  },

  placeIcon:{
    paddingEnd:20,
    paddingTop:0,
    justifyContent:'center',
    alignItems: 'center',
  },
});
