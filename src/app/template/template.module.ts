import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import {MdCardModule} from '@angular/material';


@NgModule({
  declarations: [
    TemplateComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MdCardModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
