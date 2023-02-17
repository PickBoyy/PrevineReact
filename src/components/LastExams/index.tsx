import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { AppContext } from "../../hooks/context";
import { InputText } from "../InputText";
import { Entypo } from "@expo/vector-icons";
import { IExames } from "../../model/Exames";
import { ListExams } from "../ListExams";


export function LastExams() {
  const { exames } = useContext(AppContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.placeTitle}>
        <Text style={styles.title}>Últimos exames</Text>
      </View>

      <View style={styles.findExam}>
        <View>
          <Entypo name="magnifying-glass" size={28} color="#909090" />
        </View>
        <View style={styles.placeInp}>
          <InputText />
        </View>
      </View>
        <ListExams exames={exames}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#DADADA",
    shadowColor: "#000000",
    elevation: 4,
    borderRadius: 10,
    marginBottom:120,
    paddingBottom:25
  },
  placeTitle: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 7,
    paddingBottom: 5,
  },
  findExam: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 15,
    paddingTop: 5,
    paddingBottom: 30,
  },
  placeInp: {
    marginStart: 7,
  },
});
