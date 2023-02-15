import React from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';


type IChanges = {
    title:string,
    description:string,
    data:string
}
const changes:Array<IChanges> = [
    {
        title:'Minha família',
        description:'Tenha acesso aos exames da sua família!',
        data:'nem Deus sabe...'
    },
    {
        title:'Contato',
        description:'N faço ideia do q seja isso.',
        data:''
        
    }
]

export function Updating() {
  return (
    <View style={styles.container}>
        <FlatList 
        data={changes}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        />

    </View>
  );
}

const styles = StyleSheet.create({
    container:{

    }
})