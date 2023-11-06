import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  loginError!: string;
  Loginform: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {
    this.Loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Hard-coded credentials
hardcodedCredentials = {
  username: 'dsf7093@gmail.com',
  password: 'deepak@1994'
};

  login() {
    debugger;
    console.log('Form validity:', this.Loginform.valid);
    if (this.Loginform.valid) {
      const username = this.Loginform.value.username;
      const password = this.Loginform.value.password;
      if (username === this.hardcodedCredentials.username && password === this.hardcodedCredentials.password) {
       
       this.loginError='';
      // this.router.navigate(['/lazyOnDemandLoad/dashboard']);
         this.router.navigate(['/materialDesign/dashboard']);
      } else {                   
        this.loginError = 'Invalid username or password';      }
    }
  }
 
}