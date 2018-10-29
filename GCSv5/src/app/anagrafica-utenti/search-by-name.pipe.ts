
import { Utenti } from '../utenti';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
/*
  transform(utenti: Utenti[], searchText: string): any {

    if (!utenti) { return []; }
    if (!searchText) { return utenti; }
    console.log(searchText);
  searchText = searchText.toString().toLowerCase();
    return utenti.SearchByNamePipe( it => {
      console.log(it);
      return it.toLowerCase().includes(searchText);
    });

  }*/

}
