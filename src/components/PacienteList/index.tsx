import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IPaciente } from '../../model/Paciente';

type PacienteListProps = {
  onClose: () => void; // função de retorno para fechar a lista de pacientes
};

const pacientes: IPaciente[] = [ // exemplo de lista de pacientes (substitua pelos seus dados)
  { Nome: 'Luiz Pereira Nune', Idade: 25,CorDaPele:'Negro',creatinina:2,microALB:9,Genero:'Masculino',DRC:'G2A',TFG:3},
  { Nome: 'Kleber Rocha Silva', Idade: 25,CorDaPele:'Negro',creatinina:2,microALB:9,Genero:'Masculino',DRC:'G2A',TFG:3},
  { Nome: 'Raul dos Santos Souza', Idade: 25,CorDaPele:'Negro',creatinina:2,microALB:9,Genero:'Masculino',DRC:'G2A',TFG:3},
  { Nome: 'Pedro Antunes Magalhães', Idade: 25,CorDaPele:'Negro',creatinina:2,microALB:9,Genero:'Masculino',DRC:'G2A',TFG:3},
];

export const PacienteList = (props: PacienteListProps) => {
  const handlePress = (paciente: IPaciente) => {
    // lógica para selecionar o paciente e fazer o que precisa ser feito
    props.onClose(); // fecha a lista de pacientes
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um paciente</Text>
      {pacientes.map((paciente) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(paciente)} key={paciente.Nome}>

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingStart: 45 }}>
            <Text style={styles.nome}>{paciente.Nome}</Text>
            <Text style={styles.idade}>{paciente.Idade} anos</Text>
          </View>

        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADADA',
    borderRadius: 25,
    marginStart: 15,
    marginEnd: 15,
    paddingStart: 15,
    paddingEnd: 15,
    paddingVertical: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    paddingVertical: 10,
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
