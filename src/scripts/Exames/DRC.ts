import { IPaciente } from "../../model/Paciente";
import { paciente } from "../../Repositorio/Pacientes";
import { calcularTFG } from "./TFG";

function estadiamentoDRC() {
const TFG:any = calcularTFG(paciente)

if(TFG >= 90) {
    var eTFG = "G1"
} else 
if(TFG >=60 ) {
    var eTFG = "G2"
} else 
if(TFG >= 45) {
    var eTFG = "G3a"
} else 
if(TFG >=30) {
    var eTFG = "G3b"
} else
 if(TFG >= 15) {
    var eTFG = "G4"
} else {
    var eTFG = "G5"
} 

if(paciente.microALB < 30) {
    var ALB = "A1"
} else if (paciente.microALB <= 300) {
    var ALB = "A2"
} else {
    var  ALB = "A3"
} 

}



