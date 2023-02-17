import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppContext } from "../../hooks/context";
import { IMedicines } from "../../model/Medicines";
import { HeaderModal } from "../HeaderModal";

export function ModalMedicines() {
  const { medicines } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <HeaderModal title="Medicamentos" />

      {medicines.map((medicine: IMedicines) => (
        <View key={medicine.name} style={styles.placeData}>
          <View style={styles.headerData}>
            <View style={styles.name}>
              <Text>{medicine.name}</Text>
            </View>
            <View style={styles.dose}>
              <Text>{medicine.dose}</Text>
            </View>
            <View style={styles.cp}>
              <Text>{medicine.cp}</Text>
            </View>
            <View style={styles.time}>
              <Text>{medicine.time}</Text>
            </View>
          </View>
          <View style={styles.space}>
            
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    marginTop: 5,
    marginStart: 1,
    marginEnd: 0.5,
    paddingEnd: 3,
    paddingBottom: 15,
    borderRadius: 10,
    shadowColor: "#000000",
    elevation: 5,
    zIndex: 1,
  },

  placeData: {
    backgroundColor: "#fafafa",
    borderRadius: 10,
    marginBottom: 10,
    marginStart:15,
    marginEnd:15,
    marginTop:5,
  },
  headerData: {
    flexDirection: "row",
    justifyContent: "space-between",
    
   
  },
  name: {
    borderBottomWidth: 1,
    borderEndWidth: 1,
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:5,
    paddingBottom:5,
   
  },
  dose: {
    borderBottomWidth: 1,
    borderEndWidth: 1,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:5,
    paddingBottom:5,
  },
  cp: {
    borderBottomWidth: 1,
    borderEndWidth: 1,
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:5,
    paddingBottom:5,
  },
  time: {
    borderBottomWidth: 1,
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:5,
    paddingBottom:5,
  },
  space: {
    height:40,
    paddingTop:5,
    paddingBottom:5,

  },
});
