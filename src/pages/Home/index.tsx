import React, { useContext, useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { Client } from '../../components/ShowClient'
import { Header } from '../../components/Header'
import { Alert } from '../../components/Alert'
import { TableExames } from '../../components/TableExames'
import { AppContext, useAppContext } from '../../hooks/context'


export const  Home = () => {

  const {paciente,setPaciente,exame,setExames} = useContext(AppContext)

  return (
    <View style={styles.container}>
        {/* <Header/> */}

        <Client paciente={paciente} />

        <Alert Paciente={paciente}/>
        
        <TableExames  paciente={paciente}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
     
      
    },
})
