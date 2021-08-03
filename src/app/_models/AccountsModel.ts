 

export class VisitorRegister {
  
    constructor(fullName: string, email: string, password: string, confirmPassword: string, phoneNumber: string){
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.phoneNumber = phoneNumber;
        this.activated = true;
    }
    fullName: string;
    email: string;
     password: string;
    confirmPassword: string;
    public phoneNumber: string;
    activated: boolean;
}
