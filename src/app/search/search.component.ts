import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchQuery: string = '';

  search() {
    this.searchQuery = '';
  }

  // You can add a function here to filter data based on searchQuery
  // e.g., filterItems() or something similar
}
