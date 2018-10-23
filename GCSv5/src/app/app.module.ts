import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagraficaUtentiComponent } from './anagrafica-utenti/anagrafica-utenti.component';
import { ImmobiliComponent } from './immobili/immobili.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AnagraficaUtentiComponent,
    ImmobiliComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule /* or CommonModule */,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
