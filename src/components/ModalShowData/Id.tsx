import React, { useContext } from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { AppContext } from '../../hooks/context';
import { HeaderModal } from '../HeaderModal';


export function ModalId() {
  const {paciente} = useContext(AppContext)
  return (
    <View style={styles.container}>
      <HeaderModal title='Indentificação'/>
      
      <Text style={styles.data}>Nome: {paciente.Nome}</Text>
      <Text style={styles.data}>Sexo: {paciente.Genero}</Text>
      <Text style={styles.data}>Idade: {paciente.Idade}</Text>
      <Text style={styles.data}>Cor: {paciente.CorDaPele}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#E6E6E6',
      marginTop:5,
      marginStart:1,
      marginEnd:0.5,
      paddingEnd:3,
      paddingBottom:15,
      borderRadius:10,
      shadowColor:'#000000',
      elevation:5,
      zIndex:1
      
    },
    data:{
      paddingBottom:10,
      paddingStart:15,
      fontWeight:'500',
      fontSize:16
    }
   
})