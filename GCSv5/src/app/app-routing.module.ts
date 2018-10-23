import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraficaUtentiComponent } from './anagrafica-utenti/anagrafica-utenti.component';
import { ImmobiliComponent } from './immobili/immobili.component';

const routes: Routes = [] = [
{ path : ''        , redirectTo: '/angrafica', pathMatch : 'full' },
{ path: 'angrafica', component : AnagraficaUtentiComponent } ,
{ path: 'immobili' , component : ImmobiliComponent         }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
