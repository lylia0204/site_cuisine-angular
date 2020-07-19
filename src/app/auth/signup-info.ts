export class SignUpInfo {
    username: string;
    email: string;
    role: string[];
    password: string;
   // password2: string;
                            

    constructor( username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
     //   this.password2= password2
        this.role = ['user'];
    }
}
