import {Context,createContext,ReactNode,useContext,useState,} from 'react'
import {Uuser, Uuser2} from '../../Repositorio/User'
import { ExamesIniciais } from '../../Repositorio/Exame';
import { Breno, pacientes } from '../../Repositorio/Pacientes';
import { IinitMedicines } from '../../Repositorio/Medicines';
import { IUser } from '../../model/User';

interface IContextProps {

  children:ReactNode;

}

export const AppContext:Context<any> = createContext<any>({})

export function AppWrapper({children}:IContextProps) {
const[user,setUser] = useState<IUser>(Uuser)
const[paciente,setPaciente] = useState(Breno)
const[exames,setExames]  = useState(ExamesIniciais)
const[medicines,SetMedicines] = useState(IinitMedicines)
const[familia,setFamilia] = useState(pacientes)
const[show,setShow] = useState('id')
const[screenExams,setScreenExams] = useState('last')
const[btnsMedical,setBtnsMedical] = useState(false)

    return (
        <AppContext.Provider value={{
            paciente,setPaciente,exames,setExames,user,setUser,medicines,SetMedicines,familia,setFamilia,show,setShow,screenExams,setScreenExams,btnsMedical,setBtnsMedical
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}