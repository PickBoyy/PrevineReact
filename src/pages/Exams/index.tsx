import React, { useContext } from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import { Alert } from '../../components/Alert'
import { Header } from '../../components/Header'
import { LastExams } from '../../components/LastExams'
import { NewExam } from '../../components/NewExam'
import { Client } from '../../components/ShowClient'
import { AppContext } from '../../hooks/context'

export const Exams = () => {
  const {paciente,setPaciente,exame,setExames} = useContext(AppContext)

  return (
    <ScrollView>
    <View style={styles.container}>
     
      <Header/>
      <Client paciente={paciente}/>
      <Alert Paciente={paciente}/>
      <NewExam/>
      <LastExams/>
      
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
