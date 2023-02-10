export interface IExames {
    Exame:string,
    Resultado:any,
}

export class DRC implements IExames{
    Exame: string;
    Resultado:string|number;

     constructor(
        Exame: string,
        Resultado:string|number,
     ) {
        this.Exame = Exame
        this.Resultado = Resultado
     }

     
}