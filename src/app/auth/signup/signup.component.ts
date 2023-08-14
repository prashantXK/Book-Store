import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Firestore,  doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  checkbox: string = 'password';
  successMessage: string | null = null;
  UsersIn: string[] = [];
  userDataObj: object[] = [];


  constructor(private Auth: AuthService ,private firestore: Firestore ) {}
  signup = new FormGroup
    ({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      Validators.email]),

      number: new FormControl('', [Validators.required, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      cpassword: new FormControl('', [Validators.required]),
      showpassword: new FormControl(false)

    })

  get name() {
    return this.signup.get('name')
  }
  get email() {
    return this.signup.get('email');
  }
  get number() {
    return this.signup.get('number');
  }
  get password() {
    return this.signup.get('password');
  }
  get cpassword() {
    return this.signup.get('cpassword')
  }

  showpassword() {
    return this.checkbox = this.checkbox === 'password' ? 'text' : 'password';
  }

  signupform() {
    const name = this.name?.value!;
    const email = this.email?.value!;
    const password = this.password?.value!;
    const number = this.number?.value!;

    this.Auth.isUserRegistered(email).then(async (isRegistered) => {
      if (isRegistered) {
        console.log("user is already registered")

      }
      else {

        this.Auth.signUp(name, email, password).subscribe(() => {
          console.log("signup successful")
          this.successMessage = ('Signup Successful');


        });
        const currentUserUID =await this.Auth.getCurrentUser();
        // // Generate a unique document ID for each user data entry
        const userRef = doc(this.firestore,`users/${currentUserUID?.uid}`);
        const userDocRef = doc
        const userData = {
          Name: name,
          uemail: email,
          unumber: number
        };          

        setDoc(userRef, {userData})
          .then(() => {
            console.log('User data saved in Firestore');
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });
       }
     })
  }

  closePopup() {
    this.successMessage = null;
  }



}