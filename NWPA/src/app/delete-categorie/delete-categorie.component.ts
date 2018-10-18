import { Component, OnInit, Input } from '@angular/core';
import { Categorie } from '../Categorie';
import { CategorieService } from '../categorie.service';
@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.css']
})
export class DeleteCategorieComponent implements OnInit {

  constructor(private categorieservice: CategorieService) { }
    @Input() childMessage: string;
  ngOnInit() {
    // this.categorieservice.deleteCategorie(1).subscribe()
  }

}
