import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoutingRoutingModule } from './routing-routing.module';

import { ContatoComponent } from './views/contato/contato.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { PrincipalResolver } from './principal.resolver';

const appRoutes: Routes = [
  { path: 'principal', component: PrincipalComponent,
    resolve: { github: PrincipalResolver }  },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
