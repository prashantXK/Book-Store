import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent {
  constructor(private Auth: AuthService) {

  }
  checkbox: string = 'password';
  adminlogin = new FormGroup
    ({
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      Validators.email]),
      password: new FormControl('', [Validators.required]),

    })



  get email() {
    return this.adminlogin.get('email')
  }
  get password() {
    return this.adminlogin.get('password');
  }
  showpass() {
    return this.checkbox = this.checkbox === 'password' ? 'text' : 'password';
  }
  adminform() {
    const email = this.email?.value!;
    const password = this.password?.value!;
    this.Auth.login(email, password).then((usercred) => {
      if (usercred) {
        console.log(usercred.user.email);
      } else {
        console.log('Invalid credentials');
      }
    })
      .catch((error) => {
        console.log(error);
      })
  }

  
}


