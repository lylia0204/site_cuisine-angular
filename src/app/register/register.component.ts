import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  invalidmessage =false;
  password2 :string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.email,
      this.form.password)
    
    this.confirmermotdepasse(this.form.password, this.password2)
    
  }
  confirmermotdepasse(password, password2) {
    if (password == password2){
      this.authService.signUp(this.signupInfo).subscribe(
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          this.invalidmessage =false;
          this.router.navigate(['/login']);
         
        },
        
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          
          
        }
      );
     
    } else this.invalidmessage =true;
  }

remplissageForm(){

  this.form.username = "lylemi02"
  this.form.email ="lylemi@gmail.com"
  this.form.password= "azertyui"
  this.password2 = "azertyui"
}

  
}

