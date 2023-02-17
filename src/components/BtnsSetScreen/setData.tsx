import React, { useContext } from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';
import { AppContext } from '../../hooks/context';


type MyProps = {
title:string,
typeShow:string,

}

export function BtnSetData(props:MyProps) {

    const {setShow} = useContext(AppContext)

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => setShow(props.typeShow)}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{

    },
    btn:{
        backgroundColor:'#E6E6E6',
        paddingHorizontal:16,
        paddingVertical:5,
        marginHorizontal:0,
        marginVertical:3,
        borderWidth:1.4,
        borderRadius:10

    }
})