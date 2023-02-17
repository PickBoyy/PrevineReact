import React from 'react';
import { View,StyleSheet,Text} from 'react-native';
import { Entypo  } from '@expo/vector-icons';
import { InputText } from '../InputText';

export function NewExam() {
  return (
    <View style={styles.container}>
       <View style={styles.placeTitle}><Text style={styles.title}>Novo exame</Text></View>

       <View style={styles.findExam}>
       <View>
         <Entypo  name="magnifying-glass" size={28} color="#909090" />
       </View>
        <View style={styles.placeInp}>
          <InputText/>
        </View>
       </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop:25,
      backgroundColor:'#DADADA',
      shadowColor:'#000000',
      elevation:4,
      borderRadius:10
    },
    placeTitle:{
      alignItems:'center',
    },
    title:{
      fontWeight:'bold',
      fontSize:17,
      paddingTop:7,
      paddingBottom:5,
    },
    findExam:{
      flexDirection:'row',
      alignItems:'center',
      paddingStart:15,
      paddingTop:5,
      paddingBottom:30,
    },
    placeInp:{
      marginStart:7
    },
})