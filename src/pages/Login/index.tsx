import { Link } from '@react-navigation/native'
import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Breno } from '../../Repositorio/Pacientes'
import { Home } from '../Home'

export const Login = () => (
    <View style={styles.container}>
        <Link to={{screen:'HomeIndex'}} > 
            Login
        </Link>
        <Text>OLÁ, ESSA É A TELA DE LOGIN</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        marginTop:60,
    }
})
