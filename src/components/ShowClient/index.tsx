import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IPaciente } from '../../model/Paciente';
import { Entypo } from '@expo/vector-icons';
import { PacienteList } from '../PacienteList';

type MyProps = {
  paciente: IPaciente;
};

export const Client = (props: MyProps) => {
  const [showList, setShowList] = useState(false); // estado para controlar a exibição da lista de pacientes

  const handlePress = () => {
    setShowList(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} onPress={handlePress}>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingStart: 45 }}>

          <Text style={styles.nome}>{props.paciente.Nome}</Text>
          <Text style={styles.idade}>{props.paciente.Idade} anos</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Entypo name="magnifying-glass" size={26} color="#111111" />
        </View>
      </TouchableOpacity>
      {showList && <PacienteList onClose={() => setShowList(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADADA',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    justifyContent: 'center',
    marginVertical: 15,
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
