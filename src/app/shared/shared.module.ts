import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsRoutingModule } from '../components/components-routing.module';

import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

 
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
    
  ],
  exports:[
HeaderComponent,
FooterComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
