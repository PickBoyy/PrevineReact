import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { HeaderDrawer } from './headerDrawer';
import { FontAwesome } from '@expo/vector-icons';





export function CustomDrawer({ navigation, state }:any) {
  return (
    <DrawerContentScrollView>
      <HeaderDrawer/>
{/* ------------------------------------------------------------------------------------------------------ */}
      <DrawerItem
        label="Mudar Assinuatura"
        onPress={() => navigation.navigate('changeSignature')}/>
{/* --------------------------------------------------------------------------------------------------------------- */}
    <View style={styles.updating}>
      <View style={{marginBottom:10,}}><Text style={{fontWeight:'400',fontSize:18}}>Em Breve...</Text></View>
      <View style={styles.item}>
        <FontAwesome name="circle" size={7} color="#111111"/>
        <Text style={styles.textItem}>Minha família</Text>
      </View>

      <View style={styles.item}>
        <FontAwesome name="circle" size={7} color="#111111"/>
        <Text style={styles.textItem}>Contato</Text>
      </View>
    </View>
    
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  
  item:{
    flexDirection:'row',
    alignItems:'center',
    paddingStart:10,
  },

  textItem:{
    paddingStart:5,
    fontSize:15,
    color:'#808080',
  },
  updating:{
    marginTop:15,
    paddingStart:10,
  }
});
