import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text,TouchableOpacity,StyleSheet, } from 'react-native';
import { AppContext } from '../../hooks/context';
import { BtnSetData } from '../BtnsSetScreen/setData';
import { ModalAllergies } from '../ModalShowData/allergies';
import { ModalHabits } from '../ModalShowData/habits';
import { ModalHistoric } from '../ModalShowData/historic';
import { ModalId } from '../ModalShowData/Id';
import { ModalMedicines } from '../ModalShowData/medicines';
import { ModalPathological } from '../ModalShowData/pathological';
import { ModalVaccination } from '../ModalShowData/vaccination';



export function ShowData() {
  const {show,setShow} = useContext(AppContext)
    
    useEffect(() => {
        async function getStoredShow() {
          try {
            const storedShow = await AsyncStorage.getItem('show');
            if (storedShow !== null) {
              setShow(storedShow);
            }
          } catch (e) {
            console.log(e);
          }
        }
        getStoredShow();
      }, []);
    
      useEffect(() => {
        async function storeShow() {
          try {
            await AsyncStorage.setItem('show', show);
          } catch (e) {
            console.log(e);
          }
        }
        storeShow();
      }, [show]);
      
  return (
    <View style={styles.container}>

        <View style={styles.placeBtn}>
            <BtnSetData title='Identificção' typeShow='id'/>
            <BtnSetData title='Medicamentos' typeShow='medicines'/>
            <BtnSetData title='Hábitos de Vida' typeShow='habits'/>
            <BtnSetData title='Vacinação' typeShow='vaccination'/>
            <BtnSetData title='Alergias' typeShow='allergies'/>
            <BtnSetData title='Histórico Familiar' typeShow='historic'/>
           
    </View>
    <View style={styles.btnBottom}>
      <BtnSetData title='Antecedentes Patológicos' typeShow='pathological'/>  
    </View>

    {show === 'id' && (<ModalId/>)}
    {show === 'pathological' && (<ModalPathological/>)}
    {show === 'historic' && (<ModalHistoric/>)}
    {show === 'vaccination' && (<ModalVaccination/>)}
    {show === 'allergies' && (<ModalAllergies/>)}
    {show === 'medicines' && (<ModalMedicines/>)}
    {show === 'habits' && (<ModalHabits/>)}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingStart:15,
        paddingEnd:15,
        paddingTop:15,
    },
    texts:{
        fontWeight:'900',
    },
    placeBtn:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    btnBottom:{
      alignItems:'center'
    },
    id:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:2,
        paddingEnd:2,
        paddingTop:7,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        

        
    },
    pathological:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        marginStart:2,
        marginEnd:2,
        paddingStart:2,
        paddingEnd:2,
        paddingTop:7,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
    },
    historic:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:2,
        paddingEnd:2,
        paddingTop:7,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
    },
    medicines:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:7,
        paddingEnd:7,
        paddingTop:5,
        marginEnd:65,
        borderTopStartRadius:10,
        borderTopEndRadius:10,

        
    },
    habits:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:7,
        paddingEnd:7,
        paddingTop:5,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
    }
})  