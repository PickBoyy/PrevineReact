import React, { useState } from 'react';
import { View,TextInput,StyleSheet } from 'react-native';

type MyProps = {

}
export function InputText(props:MyProps) {

    const[value,setValue] = useState('')

  return (
    <TextInput style={styles.input}
    value={value}
    onChangeText={text => setValue(text) }
    multiline={false}
    placeholder='Hemograma, Creatinina, Eas...'

    />
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1.3,
        borderColor:'#000000',
        backgroundColor:'#f8f8ff',
        width:300,
        borderRadius:2,
        paddingStart:10,
        paddingEnd:5,
        paddingTop:5,
        paddingBottom:5,
       },
})