import React, { useContext } from 'react';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { AppContext } from '../../hooks/context';
import { HeaderModal } from '../HeaderModal';
import { FontAwesome } from '@expo/vector-icons';


export function ModalHistoric() {
  const {paciente} = useContext(AppContext)
  return (
    <View style={styles.container}>
      <HeaderModal title='Histórico Familiar'/>
      <View>
        <Text>Acidente Vacular prévio: Não</Text>
        <Text>Inclui:</Text>
      </View>
        {/* aqui vai ficar o map do array de historico familiar */}
      <View style={styles.placeData}>
      <View>
        <FontAwesome name="circle" size={9} color="black" />
      </View>
      <View>
        <Text style={styles.data}></Text>
      </View>
     </View>
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
      paddingBottom:5,
      paddingStart:15,
      fontWeight:'500',
      fontSize:16
    },
    placeData:{
      
    }
   
})