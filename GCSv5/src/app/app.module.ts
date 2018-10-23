import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagraficaUtentiComponent } from './anagrafica-utenti/anagrafica-utenti.component';
import { ImmobiliComponent } from './immobili/immobili.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagraficaUtentiComponent,
    ImmobiliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
