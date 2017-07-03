import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TemplateModule } from './template/template.module';
import { RoutingModule } from './routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import 'hammerjs';
import { ViewsModule } from './views/views.module';
import { GithubService } from './services/github.service';
import { PrincipalResolver } from './principal.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplateModule,
    ViewsModule,
    RoutingModule,
    HttpModule
  ],
  providers: [
    GithubService,
    PrincipalResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
