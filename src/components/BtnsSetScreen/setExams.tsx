import React, { useContext } from 'react';
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';
import { AppContext } from '../../hooks/context';


type MyProps = {
title:string,
typeShow:string,
showBtnsMedical:boolean,
}

export function BtnSetExams(props:MyProps) {

    const {setScreenExams,setBtnsMedical} = useContext(AppContext)

    function handlerModal(showBtns:boolean,modal:string) {
        setBtnsMedical(showBtns)
        setScreenExams(modal)
    }

  return (
        <TouchableOpacity style={styles.btn} onPress={() =>  handlerModal(props.showBtnsMedical,props.typeShow)}>
            <Text style={styles.textBtn}>{props.title}</Text>
        </TouchableOpacity>
    
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
        borderRadius:5
    },
    textBtn:{
        alignItems:'center'
    }
})