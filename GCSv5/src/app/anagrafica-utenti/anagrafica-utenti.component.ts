import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnagraficaService } from '../anagrafica.service';
import { Utenti } from '../utenti';


@Component({
  selector: 'app-anagrafica-utenti',
  templateUrl: './anagrafica-utenti.component.html',
  styleUrls: ['./anagrafica-utenti.component.css']
})

export class AnagraficaUtentiComponent implements AfterViewInit {
  utenti: Utenti[];

  constructor(private anagraficaService: AnagraficaService) {

  }


  ngAfterViewInit() {
    this.anagraficaService.getCategorie().subscribe(
      anagraficaService =>  this.utenti = anagraficaService
    );
  }

  onClickMe(utenti: Utenti) {

   this.anagraficaService.deleteCategorie(utenti.idUtente)
   .subscribe(() => {
    this.reload();
   });
  }

  reload() {
    this.anagraficaService.getCategorie().subscribe(
      anagraficaService =>  this.utenti = anagraficaService
    );
  }

// add user

  addUser(event) {
    event.preventDefault();
    const target = event.target;
    const idUtente: number = target.querySelector('#idUtente').value;
    const nomeUtente: string = target.querySelector('#nomeUtente').value;
    const cognomeUtente: string = target.querySelector('#cognomeUtente').value;
    const indirizzoUtente: string = target.querySelector('#indirizzoUtente').value;
    const codiceFiscaleUtente: string = target.querySelector('#codiceFiscaleUtente').value;
    const cellulareUtente: string = target.querySelector('#cellulareUtente').value;
    const emailUtente: string = target.querySelector('#emailUtente').value;

    const utenti: Utenti = {
      idUtente: idUtente,
      nomeUtente: nomeUtente,
      cognomeUtente: cognomeUtente,
      indirizzoUtente: indirizzoUtente,
      codiceFiscaleUtente: codiceFiscaleUtente,
      cellulareUtente: cellulareUtente,
      emailUtente: emailUtente
    };

    console.log(utenti);
    if (idUtente != null) {
      this.anagraficaService.updateCategorie(utenti).subscribe(() => {
        this.reload();

       });
    }

    this.anagraficaService.postCategorie(utenti).subscribe(() => {
      this.reload();

     });
    }
  }

