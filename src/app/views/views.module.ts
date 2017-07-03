import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material'; 

@NgModule({
  declarations: [
    PrincipalComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    MdInputModule,
    MdCardModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class ViewsModule { }
