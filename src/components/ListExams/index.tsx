import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { IExames } from '../../model/Exames';
import { SimpleLineIcons } from '@expo/vector-icons';

type MyProps = {
    exames: Array<IExames>
  }
  
  export function ListExams(props: MyProps) {
    return (
      <View>
        {props.exames.map((exame) => (
          <View key={exame.Exame} style={styles.container}>
            <View style={styles.placeHeader}>
              <View style={styles.placeTitle}>
                <Text style={styles.title}>{exame.Exame}</Text>
              </View>
  
              <View style={styles.placeIcon}>
                <SimpleLineIcons name="note" size={20} color="black" />
              </View>
            </View>
  
            <View style={styles.placeDate}>
              <Text style={styles.date}>Coletado em {exame.Data}</Text>
            </View>
  
            <View style={styles.placeResult}>
              <Text style={styles.result}>Resultado: {exame.Resultado}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container:{
        marginStart:15,
        marginEnd:15,
        backgroundColor:'#f8f8ff',
        marginBottom:15,
        borderRadius:10,

    },
    placeHeader:{
        // 
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
        
    },
    placeTitle:{
        
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    title:{
       fontWeight:'500'
    },
    placeIcon:{
        paddingEnd:10,
    },
    placeDate:{
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:1,
    },
    date:{

    },
    placeResult:{
        paddingTop:5,
        paddingBottom:7,
        alignItems:'center',
        
    },
    result:{
        fontWeight:'bold'
    }
})