import { IExames } from "../../model/Exames";
import { Breno } from "../Pacientes";

 export let ExamesIniciais:Array<IExames> = [
  {
    Exame:'Creatinina',
    Resultado: Breno.creatinina
  },
  {
    Exame:'Micro Albumunúria',
    Resultado: Breno.microALB
  },
  {
    Exame:'TFG',
    Resultado: Breno.TFG
  },
  {
    Exame:'DRC',
    Resultado: Breno.DRC
  },
]