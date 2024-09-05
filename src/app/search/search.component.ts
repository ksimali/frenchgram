import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VerbApiService } from '../services/verb-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{

  //propriétés
  enteredSearchValue: string = '';

  searchForm:FormGroup = new FormGroup({
    search:new FormControl('')
  });

  constructor(){ }

  ngOnInit(): void {
    
  }

  //create custom event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
