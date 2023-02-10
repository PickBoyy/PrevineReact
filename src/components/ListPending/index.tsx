import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { IExames } from '../../model/Exames'

type MyProps = {
  exame:IExames
}

export const ListPending = (props:MyProps) => {
  return (
  <Text style={styles.list}>
    {props.exame.Exame}
  </Text>  
  )
}

const styles = StyleSheet.create({
    list:{
      fontWeight: 'bold',
      fontSize:16,
    }
})