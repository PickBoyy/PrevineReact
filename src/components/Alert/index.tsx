import React, { useContext, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { IPaciente } from "../../model/Paciente";
import { AntDesign } from "@expo/vector-icons";
import { IExames } from "../../model/Exames";
import { AppContext } from "../../hooks/context";
import { ListPending } from "../ListPending";
import AsyncStorage from "@react-native-async-storage/async-storage";

type MyProps = {
  Paciente: IPaciente;
};

export const Alert = (props: MyProps) => {
  const { exames } = useContext(AppContext);

  const verrify = exames.some(
    (exame: IExames) => exame.Resultado === undefined
  );
  var pending: Array<IExames> = exames.filter(
    (exame: IExames) => exame.Resultado === undefined
  );

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const getAlertState = async () => {
      const value = await AsyncStorage.getItem("showAlert");
      setShowAlert(value === null ? true : value === "true");
    };

    getAlertState();
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
    AsyncStorage.setItem("showAlert", "false");
  };

  if (!showAlert) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.btnClose}
        onPress={closeAlert}
      >
        <AntDesign name="close" size={26} color="black" />
      </TouchableOpacity>
      {verrify ? (
        <View style={styles.alertPendense}>
          <Text style={styles.text}>Exames pendentes :</Text>
          <FlatList
            style={styles.list}
            key={props.Paciente.Nome}
            data={pending}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ListPending exame={item} />}
          />
        </View>
      ) : (
        <View style={styles.alertChecked}>
          <Text style={styles.text}>
            Parabéns! Sua saúde está em dia! Vá curtir sua vida lembrando sempre de manter hábitos saudáveis.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginEnd: 15,
    marginTop: 15,
  },

  alertPendense: {
    flex:0.1,
    backgroundColor: "red",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
    paddingTop: 5,
    paddingStart: 15,
    paddingEnd: 15,
  },
  alertChecked: {
    backgroundColor: "green",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
    paddingTop: 2,
    paddingStart: 15,
    paddingEnd: 15,
  },

  btnClose: {
    backgroundColor: "#DADADA",
    marginStart: 350,
    marginEnd: 5,
    marginVertical: -15,
    borderRadius: 38 / 2,
    zIndex: 1,
  },
  text: {
    fontSize: 17,
    padding: 10,
  },
  list: {},
});
