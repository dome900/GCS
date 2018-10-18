import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Categorie';
import { CategorieService } from '../categorie.service';
import { promise } from 'protractor';
@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  categorie: Object;

  constructor(private categorieservice: CategorieService) {

  }
  ngOnInit() {

  }

  addUser(event) {
    event.preventDefault();
    const target = event.target;

    const nomeUtente: string = target.querySelector('#nomeUtente').value;
    const cognomeUtente: string = target.querySelector('#cognomeUtente').value;
    const indirizzoUtente: string = target.querySelector('#indirizzoUtente').value;
    const codiceFiscaleUtente: string = target.querySelector('#codiceFiscaleUtente').value;
    const cellulareUtente: string = target.querySelector('#cellulareUtente').value;
    const emailUtente: string = target.querySelector('#emailUtente').value;

    const categorie: Categorie = {

      nomeUtente: nomeUtente,
      cognomeUtente: cognomeUtente,
      indirizzoUtente: indirizzoUtente,
      codiceFiscaleUtente: codiceFiscaleUtente,
      cellulareUtente: cellulareUtente,
      emailUtente: emailUtente
    };

    console.log(categorie);


    this.categorieservice.postCategorie(categorie).subscribe(() => {
      this.reload();

     });
  }

  reload() {
    console.log('RELOAD');
    this.categorieservice.getCategorie().subscribe(
      categorieservice =>  this.categorie = categorieservice
    );

  }
}
