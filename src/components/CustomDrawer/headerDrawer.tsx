import React, { useContext } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { AppContext } from '../../hooks/context';
import { FontAwesome } from '@expo/vector-icons';



export function HeaderDrawer() {
    const {paciente,user} = useContext(AppContext)
  return (
    <View style={styles.header}>
        <View style={styles.avatar}>
           <FontAwesome name="user-circle-o" size={45} color="#696969" />
        </View>
        <View style={styles.infoUser}>
          <Text style={styles.user}>{user.userName}</Text>
          <Text style={styles.signature}>Tipo de assinatura: <Text style={styles.type}>{user.accountType}</Text></Text>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
    container:{

    },
    header: {
        marginTop:5,
        borderBottomWidth:1,
        padding:10,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      avatar:{
        marginTop:0,
        paddingStart:5,
        paddingEnd:10,
    
      },
      infoUser:{
        flex:1,
      },
      signature:{
        color:'#65645D',
        fontSize:13,
        marginStart:0,
      },
      type:{
        fontWeight:'bold'
      },
      user: {
        color: '#000',
        fontSize: 16,
        paddingTop:1,
        paddingEnd:10,
        marginBottom:3,
      },
})