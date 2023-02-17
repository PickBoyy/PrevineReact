import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppContext } from "../../hooks/context";
import {  BtnSetExams} from "../BtnsSetScreen/setExams";
import { CreateJSON } from "../CreateJSON";
import { LastExams } from "../LastExams";
import { NewExam } from "../NewExam";

export function ScreenOptions() {
  const { user,screenExams,btnsMedical } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {user.accountMedical ? (
        <View style={styles.placeBtnsMedical}>
          <BtnSetExams title="Novo Exame" typeShow="new" showBtnsMedical={false}/>
          <BtnSetExams title="Últimos Exames" typeShow="last" showBtnsMedical={false}/>
          <BtnSetExams title="Criar JSON" typeShow="json" showBtnsMedical={true}/>

          <View style={styles.BtnsShow}>
            <View style={styles.lastBtn}>
              {btnsMedical && (<BtnSetExams title="Últimos Exames" typeShow="last" showBtnsMedical={false}/>)}
              </View>
            <View style={styles.selectBtn}>
              {btnsMedical && (<BtnSetExams title="Selecionar" typeShow="last" showBtnsMedical={false}/>)}
              </View>
          </View>

        </View>
      ) : (
        <View style={styles.placeBtns}>
          <BtnSetExams title="Novo Exame" typeShow="new" showBtnsMedical={false}/>
          <BtnSetExams title="Últimos Exames" typeShow="last" showBtnsMedical={false}/>
        </View>
      )}
      <View style={{marginBottom:15}}>
        {screenExams === 'new' && (<NewExam/>)}
        {screenExams === 'last' && (<LastExams/>)}
        {screenExams === 'json' && (<CreateJSON/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:15,
  },
  placeBtns: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:45,
    marginTop:15,
  },
  BtnsShow:{
    flexDirection:'row'
  },
  placeBtnsMedical: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    flexWrap:'wrap'
  },
  lastBtn:{
    alignItems:'center',
    marginStart:60,
    marginEnd:20,
  },
  selectBtn:{
    alignItems:'center',
  }
});
