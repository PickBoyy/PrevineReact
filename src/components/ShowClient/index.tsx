import React, { useState } from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import { IPaciente } from '../../model/Paciente'
import { Octicons } from '@expo/vector-icons'; 

type MyProps = {
  paciente:IPaciente
}

export const Client = (props:MyProps) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignItems: 'center',justifyContent:'center'}}>
        <Text style={styles.nome}>{props.paciente.Nome}</Text>
        <Text style={styles.idade}>{props.paciente.Idade} anos</Text>
        <Octicons name="triangle-down" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       
        flex:0.2,
        backgroundColor: '#DADADA',
        borderRadius:10,
        marginStart:15,
        marginEnd:15,
        justifyContent:'center',
        marginVertical:15,
        paddingStart: 15,
        paddingEnd: 15,
    },
    nome:{
      fontSize: 18,
      fontWeight:'bold',
      // marginBottom:-7,
      // paddingTop:5,
    },
    idade:{
      fontSize:18,
      fontWeight:'bold',
      // paddingBottom:0,
      // marginBottom:-7,
    }

})