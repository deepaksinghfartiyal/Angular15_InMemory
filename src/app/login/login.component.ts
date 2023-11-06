import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Loginform: FormGroup;
  submitted = false;

// Hard-coded credentials
hardcodedCredentials = {
  username: 'dsf7093@gmail.com',
  password: 'deepak@1994'
};

  constructor(private fb: FormBuilder,private formBuilder: FormBuilder,private router:Router) {
    this.Loginform = this.fb.group(
      {
      username: ['', Validators.required],
      password: ['', Validators.required]
    }
    );
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.Loginform.controls;
  }
  loginUser() {
    debugger;
    this.submitted = true;

    if (this.Loginform.invalid) {
      return;
    }
    const username = this.Loginform.value.username;
    const password = this.Loginform.value.password;

    // Check if the entered credentials match the hard-coded credentials
    if (username === this.hardcodedCredentials.username && password === this.hardcodedCredentials.password) {
      // Successful login
      this.router.navigate(['/lazyOnDemandLoad/dashboard']);
    } else {
      // Failed login
    }
  }
}
