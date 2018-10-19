
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './Categorie';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class CategorieService {
    error: any;

    constructor(private http: HttpClient) { }

    getCategorie(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>('http://localhost:8080/NotWorkingProject/user/')
        .catch(this.errorHandler);
    }
    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(this.error.message || 'error');
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
