import React, { useState } from 'react';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { ModalHabits } from '../ModalShowData/habits';
import { ModalHistoric } from '../ModalShowData/historic';
import { ModalId } from '../ModalShowData/Id';
import { ModalMedicines } from '../ModalShowData/medicines';
import { ModalPathological } from '../ModalShowData/pathological';



export function ShowData() {
    const[show,setShow] = useState('id')
  return (
    <View style={styles.container}>

        <View style={styles.btnsTop}>
            <View style={styles.id}>
                <TouchableOpacity style={{height:100}} onPress={() => setShow('id')}>
                    <Text>Identificação</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.pathological}>
                <TouchableOpacity style={{height:100}} onPress={() => setShow('pathological')}>
                    <Text>Antecedentes Patológicos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.historic}>
                <TouchableOpacity style={{height:100}} onPress={() => setShow('historic')}>
                    <Text>Histórico Familiar</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.btnsBottom}>
            <View style={styles.medicines}>
                <TouchableOpacity style={{height:100}} onPress={() => setShow('medicines')}>
                    <Text>Medicamentos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.habits}>
                <TouchableOpacity style={{height:100}} onPress={() => setShow('habits')}>
                    <Text>Hábitos de Vida</Text>
                </TouchableOpacity>
            </View>
        </View>
    {show === 'id' && (<ModalId/>)}
    {show === 'pathological' && (<ModalPathological/>)}
    {show === 'historic' && (<ModalHistoric/>)}
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
    btnsTop:{
        flexDirection:'row',
        height:105,
    },
    btnsBottom:{
        flexDirection:'row',
        zIndex:1,
        height:50,
        marginTop:-70,
        marginStart:35,
    },
    id:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:2,
        paddingEnd:2,
        paddingTop:5,
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
        paddingTop:5,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
    },
    historic:{
        backgroundColor:'#D9D9D9',
        borderWidth:1,
        borderColor:'#000000',
        paddingStart:2,
        paddingEnd:2,
        paddingTop:5,
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