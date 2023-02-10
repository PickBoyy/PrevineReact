import { IPaciente } from "../../model/Paciente";

export function calcularTFG(paciente:IPaciente) {

    if(paciente.Genero === 'Maculino' && paciente.CorDaPele === 'Negro' && paciente.creatinina <= 0.9) {
        return 163* Math.pow(paciente.creatinina/0.9, -0.411) * Math.pow(0.993, paciente.Idade);
    } else
    if (paciente.Genero === 'Masculino' && paciente.CorDaPele == 'Negro' && paciente.creatinina > 0.9) {
        return 163* Math.pow(paciente.creatinina/0.9, -1.209) * Math.pow(0.993, paciente.Idade);
    } else 
    if (paciente.Genero === 'Masculino' && paciente.CorDaPele === 'Negro' && paciente.creatinina <= 0.9) {
        return 141* Math.pow(paciente.creatinina/0.9, -0.411)* Math.pow(0.993, paciente.Idade);
    } else
    if (paciente.Genero === 'Masculino' && paciente.CorDaPele === 'Negro' && paciente.creatinina > 0.9) {
        return 141* Math.pow(paciente.creatinina/0.9, -1.209)* Math.pow(0.993, paciente.Idade);
    } else
    if(paciente.Genero === 'Feminino' && paciente.CorDaPele === 'Negro' && paciente.creatinina <= 0.7) {
        return 166* Math.pow(paciente.creatinina/0.7, -0.329) * Math.pow(0.993, paciente.Idade);
    } else
    if (paciente.Genero === 'Feminino' && paciente.CorDaPele === 'Negro' && paciente.creatinina > 0.7) {
        return 166* Math.pow(paciente.creatinina/0.7, -1.209) * Math.pow(0.993, paciente.Idade);
    } else
    if (paciente.Genero === 'Feminino' && paciente.CorDaPele === 'Negro' && paciente.creatinina <= 0.7) {
        return 144* Math.pow(paciente.creatinina/0.7, -0.329)* Math.pow(0.993, paciente.Idade);
    } else
    if (paciente.Genero === 'Feminino' && paciente.CorDaPele === 'Negro' && paciente.creatinina > 0.7) {
        return 144* Math.pow(paciente.creatinina/0.7, -1.209)* Math.pow(0.993, paciente.Idade);
    }
    
}