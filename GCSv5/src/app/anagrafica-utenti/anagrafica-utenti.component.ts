
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnagraficaService } from '../anagrafica.service';
import { Utenti } from '../utenti';
import { FormBuilder, FormGroup, Validators, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-anagrafica-utenti',
  templateUrl: './anagrafica-utenti.component.html',
  styleUrls: ['./anagrafica-utenti.component.css']
})

export class AnagraficaUtentiComponent implements OnInit {

  utenti: Utenti[];
  form: FormGroup;
  constructor(private anagraficaService: AnagraficaService, private formBuilder: FormBuilder) {

  }

corsHandler() {
        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Headers', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth');


/*
        return this.http.post(this.url, body,{
            headers: headers, responseType:response
        }).toPromise().then( res=> {
            console.log(res.json());
            this.shadre.changeLoading(false);
            return res.json().news;
        })
        */
    }


  ngOnInit() {
    this.anagraficaService.getCategorie().subscribe(
      anagraficaService => this.utenti = anagraficaService
    );
    this.form = this.formBuilder.group({
      idUtente: ['', [Validators.required]]
    });
  }
  /*checkIdUtente(control: AbstractControl) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '71') {
            resolve({ idUtenteIsTaken: true });
        } else {resolve(null); }
          }, 2000);
    });
  }*/

  onClickMe(utenti: Utenti) {

    this.anagraficaService.deleteCategorie(utenti.idUtente)
      .subscribe(() => {
        this.reload();
      });
  }

  reload() {
    this.anagraficaService.getCategorie().subscribe(
      anagraficaService => this.utenti = anagraficaService
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
      SearchByNamePipe: nomeUtente,
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
    if (isNaN(idUtente)) {
      this.anagraficaService.postCategorie(utenti).subscribe(() => {
        this.reload();

      });
    }

  }
}

