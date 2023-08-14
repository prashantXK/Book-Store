import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import {v4 as uuidv4} from 'uuid';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

User!:string;
userNumber!: string;
constructor(protected auth:AuthService, private router:Router){
  this.User = uuidv4();
}
}
