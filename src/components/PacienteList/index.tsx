import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../../hooks/context';
import { IPaciente } from '../../model/Paciente';

type MyProps = {
  onClose: () => void; // função de retorno para fechar a lista de pacientes
  familia:Array<IPaciente>
};



export const PacienteList = (props:MyProps) => {
 
  const {setPaciente} = useContext(AppContext)

  const handlePress = (paciente: IPaciente) => {
    props.onClose(); 
    setPaciente(paciente)
  };

  return (
    <View style={styles.container}>
      {props.familia.map((familiar) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(familiar)} key={familiar.Nome}>

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingStart: 45 }}>
            <Text style={styles.nome}>{familiar.Nome}</Text>
            <Text style={styles.idade}>{familiar.Idade} anos</Text>
          </View>

        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    borderRadius: 25,
    marginStart: 15,
    marginEnd: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 25,
    paddingBottom: 10,
    shadowColor: 'black',
    elevation: 5,
    marginTop:-40,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#DADADA',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    justifyContent: 'center',
    marginTop:10,
    // marginBottom:5,
    paddingStart: 15,
    paddingEnd: 15,
    padding: 5,
    shadowColor: 'black',
    elevation: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingEnd: 0,
    paddingTop: 5,
  },
  idade: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
