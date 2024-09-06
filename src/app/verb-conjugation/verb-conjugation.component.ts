import { Component } from '@angular/core';
import { VerbApi } from '../models/verb-api.model';
import { VerbApiService } from '../services/verb-api.service';
import { Router } from 'express';

@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrl: './verb-conjugation.component.scss'
})
export class VerbConjugationComponent {

  constructor(private verbApiService: VerbApiService){

  }

}
