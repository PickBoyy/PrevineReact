import {Context,createContext,ReactNode,useContext,useState,} from 'react'
import { IExames } from '../../model/Exames';
import { ExamesIniciais } from '../../Repositorio/Exame';
import { Breno } from '../../Repositorio/Pacientes';

interface IContextProps {

  children:ReactNode;

}

export const AppContext:Context<any> = createContext<any>({})

export function AppWrapper({children}:IContextProps) {
const[user,setUser] = useState()
const[paciente,setPaciente] = useState(Breno)
const[exames,setExames]  = useState(ExamesIniciais)

    return (
        <AppContext.Provider value={{paciente,setPaciente,exames,setExames}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}