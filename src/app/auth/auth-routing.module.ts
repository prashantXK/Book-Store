import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';




const routes: Routes = [
  { path: 'login',title:'login', component: LoginComponent },
  {path:'forgotpass', title:'forgotpassword',component:ForgotpassComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', title:'signup',component: SignupComponent },
  { path: 'adminlogin',title:'adminlogin', component: AdminloginComponent },
  { path: '**', title:'error',component: NotfoundComponent },
 




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
