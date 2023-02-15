import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Alert } from '../../components/Alert'
import { Header } from '../../components/Header'
import { Client } from '../../components/ShowClient'
import { ShowData } from '../../components/ShowBtnData'
import { AppContext } from '../../hooks/context'

export const Data = () => {
  const {paciente,exames} = useContext(AppContext)

  return (
    <View>
       <Header/>
        <Client paciente={paciente}/>
        <Alert Paciente={paciente}/>
        <ShowData/>

    </View>
  )
}
