export interface IUser { 
    userName:string,
    id:string,
    email:string,
    password:string,
    accountType:string,
    accountMedical:boolean
}

export  class User implements IUser {
    userName:string;
    id:string;
    email:string;
    password:string;
    accountType:string;
    accountMedical:boolean;

    constructor (
        userName:string,
        id:string,
        email:string,
        password:string,
        accountType:string,
        accountMedical:boolean

    ) {
        this.userName = userName
        this.id = id
        this.email = email
        this.password = password
        this.accountType = accountType
        this.accountMedical = accountMedical
    }

}