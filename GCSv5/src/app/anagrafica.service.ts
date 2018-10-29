import { Utenti } from './utenti';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnagraficaService {

    error: any;


    corsHandler() {
        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Headers', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth');

        /*return this.http.post(this.url, body,{
            headers: headers, responseType:response
        }).toPromise().then( res=> {
            this.shadre.changeLoading(false);
            return res.json().news;
        })
        */
    }






    constructor(private http: HttpClient) { }
/*
    getCategorie() {
        return this.http.get('http://localhost:8080/NotWorkingProject/user/');
    } */

    getCategorie(): Observable<Utenti[]> {


        return this.http.get<Utenti[]>('http://localhost:8080/NotWorkingProject/user/');

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

