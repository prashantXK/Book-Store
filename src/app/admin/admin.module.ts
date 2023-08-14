import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { AdmindbComponent } from './admindb/admindb.component';
import { FormsModule } from '@angular/forms';
import { AddbooksComponent } from './addbooks/addbooks.component';



@NgModule({
  declarations: [

    UsersComponent,
    OrdersComponent,
    AdmindbComponent,
    AddbooksComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
   
  ]
})
export class AdminModule { 
  
}
