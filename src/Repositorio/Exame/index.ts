import { IExames } from "../../model/Exames";
import { Breno } from "../Pacientes";

 export let ExamesIniciais:Array<IExames> = [
  {
    Exame:'Creatinina',
    Resultado: Breno.creatinina,
    Data:'19/07/2022'
  },
  {
    Exame:'Micro Albumunúria',
    Resultado: Breno.microALB,
    Data:'12/02/2022'
  },
  {
    Exame:'TFG',
    Resultado: Breno.TFG,
    Data:'02/12/2022'
  },
  {
    Exame:'DRC',
    Resultado: Breno.DRC,
    Data:'01/11/2022'
  },
]