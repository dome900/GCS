import { Categorie } from './Categorie';
import { CategorieService } from './categorie.service';
import { Component, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  title = 'NWP';
  categorie: Object;

  constructor(private categorieservice: CategorieService) {
/*
setInterval(() => {
  this.categorieservice.getCategorie().subscribe(
    // tslint:disable-next-line:no-shadowed-variable
    categorieservice =>  this.categorie = categorieservice
  );
}, 1000);*/
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.categorieservice.getCategorie().subscribe(
       categorieservice =>  this.categorie = categorieservice
    );
  }

  ngDoCheck(): void {
    this.categorieservice.getCategorie().subscribe(
       categorieservice =>  this.categorie = categorieservice
    );
  }

  onClickMe(categorie: Categorie) {

   this.categorieservice.deleteCategorie(categorie.idUtente)
   .subscribe(() => {
    this.reload();
   });
  }

  reload() {
    this.categorieservice.getCategorie().subscribe(
      categorieservice =>  this.categorie = categorieservice
    );
  }



}
