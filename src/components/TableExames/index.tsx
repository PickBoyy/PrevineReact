import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../../hooks/context";
import { IExames } from "../../model/Exames";
import { IPaciente } from "../../model/Paciente";
import { ListCondition } from "../ListCondition";


type MyProps = {
  paciente: IPaciente;
};
export const TableExames = (props: MyProps) => {
  const { exames } = useContext(AppContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Condições de saúde</Text>

      <View style={styles.headerTable}>

      <View style={styles.condition}>
        <Text style={styles.textCondition}>Condição</Text>
      </View>

        <View style={styles.row}></View>

        <View style={styles.condition2}>
          <Text style={styles.feito}>Feito</Text>

          <View style={styles.result}>
            <Text>Resultado</Text>
          </View>

        </View>
      </View>
      <View  style={styles.list}>
      <FlatList
        key={props.paciente.Nome}
       
        data={exames}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ListCondition exames={item} />}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation:5,
    alignItems: "center",
    backgroundColor: "#DADADA",
    borderRadius: 5,
    marginStart: 15,
    marginEnd: 15,
    justifyContent: "space-between",
    marginVertical: 25,
    marginBottom: 10,
    paddingBottom: 20,
    paddingStart: 15,
    paddingEnd: 15,
    height:370,
  },
  title: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 20,
  },
  headerTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    borderRadius: 15,
    width: 350,
  },
  textCondition: {

  },

  condition: {
    backgroundColor:'#FAFAFA',
    alignItems:'center',
    width:175,
    borderTopStartRadius:15,
    borderBottomStartRadius:15
  },
  feito: {
    marginStart:5,
    paddingStart:5,
    marginEnd: 0,
  },
  result: {
    backgroundColor: "#00A6ED",
    borderRadius: 15,
    paddingStart: 29,
    paddingEnd: 29,
    paddingBottom:0,
    paddingTop: 0,
    marginStart:14,
    marginEnd: 0,
  },
  row: {
    width: 1,
    backgroundColor: "black",
  },
  condition2:{
    width:177,
    flexDirection:'row',
    marginStart:1,
    backgroundColor:'#FAFAFA',
    borderBottomEndRadius:15,
    borderTopEndRadius:15,
  },
  list:{
    justifyContent:'center'
  }
});
