// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
  
//   error:string | null = null;

//   constructor(private Auth: AuthService ,private router:Router) {

//   }
//   checkbox: string = 'password';
//   login = new FormGroup
//     ({
//       email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
//       Validators.email]),
//       password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),

//     })



//   get email() {
//     return this.login.get('email')
//   }
//   get password() {
//     return this.login.get('password');
//   }
//   showpass() {
//     return this.checkbox = this.checkbox === 'password' ? 'text' : 'password';
//   }


//   loginform() {

//     const email = this.email?.value!;
//     const password = this.password?.value!;
// if (this.login.valid){
//   this.authService.isUserRegistered(email)
//   .then((isRegistered)=>{

//     if(isRegistered){
//       this.authService.login(email,password)
//       .then(()=>{
//         this.router.navigate(['/home']);

//       })
//       .catch((error)=>{
//         console.log("Error Logged");
//       })

//     }else{
//       this.error = "User Not Registered";
//     }
//   })
//   .catch((error)=>{
//     console.log("Error Logged");
//   });
// }else{
//   this.error = "Invalid User";
// }



//     this.Auth.login(email, password).then((usercred) => {
//       if (usercred) {
//         console.log(usercred.user.email);
//       } else {
//         console.log('Invalid credentials');
//       }
//     })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

// }
// }


import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string | null = null;
  checkbox: string = 'password';
  login: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
     
      ])
    });
  }

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }

  showpass() {
    this.checkbox = this.checkbox === 'password' ? 'text' : 'password';
  }

  loginform() {
    const email = this.email?.value!;
    const password = this.password?.value!;

    if (this.login.valid) {
      this.authService
        .isUserRegistered(email)
        .then((isRegistered) => {
          if (isRegistered) {
            this.authService
              .login(email, password)
              .then(() => {
                this.router.navigate(['/home']);
              })
              .catch((error) => {
                console.log('Error Logged');
              });
          } else {
            this.error = 'User Not Registered';
          }
        })
        .catch((error) => {
          console.log('Error Logged');
        });
    } else {
      this.error = 'Invalid User';
    }
    
  }
}
