import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AdmindbComponent } from '../admin/admindb/admindb.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {path:'about', title:'about',component:AboutComponent},

  {path: '', redirectTo: 'home',pathMatch: 'full' },


  {path:'admindb',component:AdmindbComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
