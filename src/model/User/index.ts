export interface IUser { 
    userName:string,
    id:string,
    email:string,
    password:string,
    accountType:string
}

export  class User implements IUser {
    userName:string;
    id:string;
    email:string;
    password:string;
    accountType:string;

    constructor (
        userName:string,
        id:string,
        email:string,
        password:string,
        accountType:string,
    ) {
        this.userName = userName
        this.id = id
        this.email = email
        this.password = password
        this.accountType = accountType
    }

}