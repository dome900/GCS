import { Utenti } from './utenti';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {



    error: any;

    constructor(private http: HttpClient) { }
/*
    getCategorie() {
        return this.http.get('http://localhost:8080/NotWorkingProject/user/');
    }
*/
    getCategorie(): Observable<Utenti[]> {
        return this.http.get<Utenti[]>('http://localhost:8080/NotWorkingProject/user/').pipe();

    }





    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || 'error');

    }

    postCategorie(utenti) {
        return this.http.post('http://localhost:8080/NotWorkingProject/user/', utenti);

    }
    updateCategorie(utenti: Utenti) {

        const url: string = 'http://localhost:8080/NotWorkingProject/user/' + utenti.idUtente;
        console.log(url);
        return this.http.put(url, utenti);

    }
    deleteCategorie(id: number) {

        const url = 'http://localhost:8080/NotWorkingProject/user/' + id;
        console.log(url);
        return this.http.delete(url);

    }

  }

