import {Context,createContext,ReactNode,useContext,useState,} from 'react'
import {Uuser} from '../../Repositorio/User'
import { ExamesIniciais } from '../../Repositorio/Exame';
import { Breno } from '../../Repositorio/Pacientes';
import { IinitMedicines } from '../../Repositorio/Medicines';

interface IContextProps {

  children:ReactNode;

}

export const AppContext:Context<any> = createContext<any>({})

export function AppWrapper({children}:IContextProps) {
const[user,setUser] = useState(Uuser)
const[paciente,setPaciente] = useState(Breno)
const[exames,setExames]  = useState(ExamesIniciais)
const[medicines,SetMedicines] = useState(IinitMedicines)

    return (
        <AppContext.Provider value={{paciente,setPaciente,exames,setExames,user,setUser,medicines,SetMedicines}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}