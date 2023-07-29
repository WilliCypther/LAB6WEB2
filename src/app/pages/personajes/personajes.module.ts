import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    PersonajesComponent,
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,MatCardModule,MatIconModule 
  ]
})
export class PersonajesModule { }
