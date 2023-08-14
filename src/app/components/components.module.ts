import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ComponentsRoutingModule } from './components-routing.module';

import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { BooksComponent } from './books/books.component';
import { FictionComponent } from './fiction/fiction.component';
import { AutobiographyComponent } from './autobiography/autobiography.component';
import { SelfhelpbooksComponent } from './selfhelpbooks/selfhelpbooks.component';
import { FashionComponent } from './fashion/fashion.component';
import { HealthlifestyleComponent } from './healthlifestyle/healthlifestyle.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [

    AboutComponent,

     SearchComponent,
     ProfileComponent,
     BooksComponent,
     FictionComponent,
     AutobiographyComponent,
     SelfhelpbooksComponent,
     FashionComponent,
     HealthlifestyleComponent,
     CartComponent,
    
  
    

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
   
  ]
})
export class ComponentsModule { }
