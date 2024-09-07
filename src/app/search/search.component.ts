import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VerbApiService } from '../services/verb-api.service';
import { VerbApi } from '../models/verb-api.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent{

  searchForm:FormGroup;
  conjugatedVerb: VerbApi[]= [];

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
          this.conjugatedVerb = res.verb;
          console.log(this.conjugatedVerb);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
