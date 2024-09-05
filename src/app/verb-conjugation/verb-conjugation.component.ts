import { Component } from '@angular/core';

@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrl: './verb-conjugation.component.scss'
})
export class VerbConjugationComponent {

  // propriétés
  searchText: string = '';

  // get the value entered in searchBar and put in searchText proprety
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
