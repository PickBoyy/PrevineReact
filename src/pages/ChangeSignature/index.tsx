import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { Header } from '../../components/Header';

export function ChangeSignature() {
  return (
    <View style={styles.container}>
        <Header/>
        <Text>MUDE O TIPO DE ASSINATURA </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        
    }
})