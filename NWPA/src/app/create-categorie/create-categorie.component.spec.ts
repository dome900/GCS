import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Categorie'
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {

  constructor(private categorieservice: CategorieService) {

  }
  ngOnInit() {

  }

  addUser(event) {
    event.preventDefault();
    const target = event.target;
    
    let nomeUtente:string = target.querySelector('#nomeUtente').value;
    let cognomeUtente:string = target.querySelector('#cognomeUtente').value;

    let indirizzoUtente:string = target.querySelector('#indirizzoUtente').value;
    let codiceFiscaleUtente:string = target.querySelector('#codiceFiscaleUtente').value;
    let cellulareUtente:string = target.querySelector('#cellulareUtente').value;
    let emailUtente:string = target.querySelector('#emailUtente').value;

    const categorie: Categorie = {
      
      nomeUtente: nomeUtente,
      cognomeUtente: cognomeUtente,
      indirizzoUtente: indirizzoUtente,
      codiceFiscaleUtente: codiceFiscaleUtente,
      cellulareUtente: cellulareUtente,
      emailUtente: emailUtente
    }
    

    console.log(categorie);
    this.categorieservice.postCategorie(categorie).subscribe()
   
  }
  
}
