import { Component, OnInit, Inject } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { Categorie } from '../Categorie';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  form11: FormGroup;
  categorie: Object;



  // constructor(@Inject(FormBuilder) private formBuilder: FormBuilder, private categorie: Categorie) {}
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder, private categorieservice: CategorieService) {}
  ngOnInit() {

    this.form11 = this.formBuilder.group({

        id: [''],
        nomeUtente: [''],
        cognomeUtente: [''],
        indirizzoUtente: [''],
        codiceFiscaleUtente: [''],
        cellulareUtente: [''],
        emailUtente: ['']

   });

  }



  onSubmit() {

    const id = this.form11.value.id;
    const nomeUtente = this.form11.value.nomeUtente;
    const cognomeUtente = this.form11.value.cognomeUtente;
    const indirizzoUtente = this.form11.value.indirizzoUtente;
    const codiceFiscaleUtente = this.form11.value.codiceFiscaleUtente;
    const cellulareUtente = this.form11.value.cellulareUtente;
    const emailUtente = this.form11.value.emailUtente;

    const categorie: Categorie = {
      idUtente: id,
      nomeUtente: nomeUtente,
      cognomeUtente: cognomeUtente,
      indirizzoUtente: indirizzoUtente,
      codiceFiscaleUtente: codiceFiscaleUtente,
      cellulareUtente: cellulareUtente,
      emailUtente: emailUtente
    };

    console.log(id);
    console.log(categorie);
    alert('ALERT\n\n' + JSON.stringify(this.form11.value) + categorie.idUtente);
    this.categorieservice.updateCategorie(categorie).subscribe(() => this.reload());


  }

  reload() {
    console.log('reload');
    this.categorieservice.getCategorie().toPromise();

  }
}
