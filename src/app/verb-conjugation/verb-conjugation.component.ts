import { Component } from '@angular/core';
import { VerbApi } from '../models/verb-api.model';
import { VerbApiService } from '../services/verb-api.service';
import { Router } from 'express';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verb-conjugation',
  templateUrl: './verb-conjugation.component.html',
  styleUrl: './verb-conjugation.component.scss'
})
export class VerbConjugationComponent {

  searchForm:FormGroup;

  constructor(private verbApiService : VerbApiService, private fb: FormBuilder ){
    this.searchForm = this.fb.group({
      search: [''],
    });
   }

  onSearch(){
    if(this.searchForm.valid){
      //recuperer les infos du form
      const search = this.searchForm.value.search; // recuper la value direct et non l'objet
      console.log(search);
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc3NpbUBnbWFpbC5jb20iLCJ1aWQiOiI2NmQ4NzNlOThhZjNlNmQ5OWMyNmJhNTQiLCJleHAiOjE3MjgwNTg3OTB9.sm0L5C404aY-mb0yfUJlHAGRfyOjRNo9N9vK4WO1bOM";

      this.verbApiService.getVerb(token, search).subscribe(
        (res)=> {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
