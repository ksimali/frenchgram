import { Component, Input } from '@angular/core';
import { VerbApi } from '../models/verb-api.model';

@Component({
  selector: 'app-verb-display',
  templateUrl: './verb-display.component.html',
  styleUrl: './verb-display.component.scss'
})
export class VerbDisplayComponent {
  @Input() verb: VerbApi | undefined; // Reception des données

  constructor() {}

  getTenses() {
    // Récupère tous les temps de conjugaison de l'indicatif
    const indicatif = this.verb?.indicatif;
    return [
      { name: 'Présent', ...indicatif?.present },
      { name: 'Imparfait', ...indicatif?.imparfait },
      { name: 'Futur Simple', ...indicatif?.futurSimple },
      // Ajoutez d'autres temps si nécessaire
    ];
  }
}
