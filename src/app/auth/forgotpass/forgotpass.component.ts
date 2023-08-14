import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent {
  successMessage: string | null = null;
  constructor(private Auth: AuthService) {

  }
  forgotpass = new FormGroup
  ({
    email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    Validators.email]),
    
  })
  

  get email() {
    return this.forgotpass.get('email');
  }
resetpassword(){

const email = this.email?.value!;
this.Auth.resetPassword(email).then(()=>{
console.log('reset password')
})
}
closePopup() {
  this.successMessage = null;
  
}


}
