import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './Categorie';

@Injectable({
    providedIn: 'root'
})

export class CategorieService {

    constructor(private http: HttpClient) { }

    getCategorie() {
        return this.http.get('http://localhost:8080/NotWorkingProject/user/');
    }
    postCategorie(categorie) {
        return this.http.post('http://localhost:8080/NotWorkingProject/user/', categorie);

    }
    updateCategorie(categorie: Categorie) {

        const url: string = 'http://localhost:8080/NotWorkingProject/user/' + categorie.idUtente;
        console.log(url);
        return this.http.put(url, categorie);

    }
    deleteCategorie(id: number) {

        const url = 'http://localhost:8080/NotWorkingProject/user/' + id;
        console.log(url);
        return this.http.delete(url);

    }


}
