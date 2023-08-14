import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdmindbComponent } from './admin/admindb/admindb.component';
import { UsersComponent } from './admin/users/users.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AddbooksComponent } from './admin/addbooks/addbooks.component';
import { AutobiographyComponent } from './components/autobiography/autobiography.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { HealthlifestyleComponent } from './components/healthlifestyle/healthlifestyle.component';
import { FictionComponent } from './components/fiction/fiction.component';
import { SelfhelpbooksComponent } from './components/selfhelpbooks/selfhelpbooks.component';
import { CartComponent } from './components/cart/cart.component';




const routes: Routes = [ 
   
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'components',loadChildren:()=>import('./components/components.module').then(m=>m.ComponentsModule)},
  {path: 'home', title:'home',component: HomeComponent},


{path:'search',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admindb' , component:AdmindbComponent},
{path:'users' , component:UsersComponent},

{path:'orders', component:OrdersComponent},
{path:'cart',component:CartComponent},
{path:'search',component:SearchComponent},

{path:'addbooks', component:AddbooksComponent},
{path:'auto', component:AutobiographyComponent},
{path:'fashion', component:FashionComponent},
{path:'health', component:HealthlifestyleComponent},
{path:'fiction', component:FictionComponent},
{path:'selfhelp', component:SelfhelpbooksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
