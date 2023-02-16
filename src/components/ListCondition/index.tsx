import React, { useState } from 'react'
import { TouchableOpacity, View, Text,StyleSheet } from 'react-native'
import { IExames } from '../../model/Exames'
import { AntDesign, } from '@expo/vector-icons'

type MyProps = { 
    exames:IExames
}

export const ListCondition = (props:MyProps) => {
   
    return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.condition}>
        <Text style={styles.title}>{props.exames.Exame}</Text>
        </TouchableOpacity>

        <View style={{width:1,backgroundColor:'black',shadowColor:'#000000', elevation:2,}}></View>

        <TouchableOpacity style={styles.detailsExams}>

        <View style={props.exames.Resultado === undefined ? styles.unCheck : styles.checke}>
            <AntDesign name={props.exames.Resultado === undefined ? 'close' : 'check'} size={27} color='black'/>
        </View>

        <View style={props.exames.Resultado === undefined ? styles.noResult : styles.result}>
            <Text>{props.exames.Resultado === undefined  ? `Sem Exame` : `${props.exames.Resultado}`}</Text>
        </View>

        </TouchableOpacity>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:355,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    condition:{
        width:177,
        backgroundColor:'#FAFAFA',
        borderTopStartRadius:10,
        borderBottomStartRadius:10,
        alignItems:'center',
        paddingBottom:15,
        paddingTop:15,
        shadowColor:'#000000',
        elevation:2,
    },
    title:{
        fontSize:16,
        paddingStart:14,
        paddingEnd:13,
    },
    checke:{
        backgroundColor:'#43DB2A',
        borderWidth:1,
        borderColor:'#000000',
        borderRadius:20,
        marginStart:12,
        
    },
    unCheck:{
        backgroundColor:'#43DB2A',
        borderWidth:1,
        borderColor:'#000000',
        borderRadius:20,
        marginStart:12,
    },
    result:{
        backgroundColor:'#108F40',
        alignItems:'center',
        width:120,
        marginEnd:3,
        paddingEnd:3,
        paddingStart:10,
        paddingTop:16,
        paddingBottom:16,
        borderRadius:11,
        
    
    },
    noResult:{
        backgroundColor:'red',
        alignItems:'center',
        width:120,
        marginEnd:3,
        paddingEnd:3,
        paddingStart:10,
        paddingTop:11,
        paddingBottom:11,
        borderRadius:11

    },
    detailsExams:{
        backgroundColor:'#FAFAFA',
        width:177,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopEndRadius:15,
        borderBottomEndRadius:15,
        shadowColor:'#000000',
        elevation:2,
    }

})