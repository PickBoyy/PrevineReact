export interface IPaciente { 
    Nome:string,
    Idade:number,
    Genero:string,
    CorDaPele:string,
    creatinina:number,
    microALB:number,
    //
    TFG:number;
    DRC:string
 }

export class Paciente implements IPaciente {
    Nome:string;
    Idade:number;
    Genero:string;
    CorDaPele:string;
    creatinina:number;
    microALB:number
    //
    TFG:number;
    DRC:string;
    
    constructor(
        Nome:string,
        Idade:number,
        Genero:string,
        CorDaPele:string,
        creatinina:number,
        microALB:number,
    ) {
        this.Nome = Nome
        this.Idade = Idade
        this.Genero = Genero
        this.CorDaPele = CorDaPele
        this.creatinina = creatinina
        this.microALB = microALB
        //
        this.TFG = this.calcularTFG()
        this.DRC = this.estadiamentoDRC()
    }
    calcularTFG() {

        if(this.Genero === 'Maculino' && this.CorDaPele === 'Negro' && this.creatinina <= 0.9) {
            return 163* Math.pow(this.creatinina/0.9, -0.411) * Math.pow(0.993, this.Idade);
        } else
        if (this.Genero === 'Masculino' && this.CorDaPele == 'Negro' && this.creatinina > 0.9) {
            return 163* Math.pow(this.creatinina/0.9, -1.209) * Math.pow(0.993, this.Idade);
        } else 
        if (this.Genero === 'Masculino' && this.CorDaPele === 'Negro' && this.creatinina <= 0.9) {
            return 141* Math.pow(this.creatinina/0.9, -0.411)* Math.pow(0.993, this.Idade);
        } else
        if (this.Genero === 'Masculino' && this.CorDaPele === 'Negro' && this.creatinina > 0.9) {
            return 141* Math.pow(this.creatinina/0.9, -1.209)* Math.pow(0.993, this.Idade);
        } else
        if(this.Genero === 'Feminino' && this.CorDaPele === 'Negro' && this.creatinina <= 0.7) {
            return 166* Math.pow(this.creatinina/0.7, -0.329) * Math.pow(0.993, this.Idade);
        } else
        if (this.Genero === 'Feminino' && this.CorDaPele === 'Negro' && this.creatinina > 0.7) {
            return 166* Math.pow(this.creatinina/0.7, -1.209) * Math.pow(0.993, this.Idade);
        } else
        if (this.Genero === 'Feminino' && this.CorDaPele === 'Negro' && this.creatinina <= 0.7) {
            return 144* Math.pow(this.creatinina/0.7, -0.329)* Math.pow(0.993, this.Idade);
        } else
        if (this.Genero === 'Feminino' && this.CorDaPele === 'Negro' && this.creatinina > 0.7) {
            return 144* Math.pow(this.creatinina/0.7, -1.209)* Math.pow(0.993, this.Idade);
        } else {
            return 0
        }
        
    }

    calcularMicroALB() {
        if(this.microALB < 30) {
        return "A1"
        } else if (this.microALB <= 300) {
        return "A2"
        } else {
        return "A3"
        } 
    }

    estadiamentoDRC() {
        
        if(this.TFG >= 90) {
            return `G1 ${this.calcularMicroALB()}`
        } else 
        if(this.TFG >=60 ) {
            return `G2 ${this.calcularMicroALB()}`
        } else 
        if(this.TFG >= 45) {
            return `G3a ${this.calcularMicroALB()}`
        } else 
        if(this.TFG >=30) {
            return `G3b ${this.calcularMicroALB()}`
        } else
         if(this.TFG >= 15) {
            return `G4 ${this.calcularMicroALB()}`
        } else {
            return `G5 ${this.calcularMicroALB()}`
        } 

    }
    
        
} 