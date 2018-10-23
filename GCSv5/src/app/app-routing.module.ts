import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagraficaUtentiComponent } from './anagrafica-utenti/anagrafica-utenti.component';
import { ImmobiliComponent } from './immobili/immobili.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [] = [
{ path : '', redirectTo: '/anagrafica', pathMatch : 'full'  },
{ path: 'anagrafica', component : AnagraficaUtentiComponent },
{ path: 'immobili' , component : ImmobiliComponent         },
{ path: '**' , component : ErrorComponent            }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
