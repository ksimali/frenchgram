import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder){
    // creation du form
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      name:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSignup(){
    if(this.signupForm.valid){
      //recuperer les infos du form
      const{email, name, password} = this.signupForm.value;

      this.userService.signup(email, name, password).subscribe(
        (res)=> {
          alert(`${name} a bien été inscrit avec succès!`);
          console.log(res);
        },
        (err) => {
          alert("L'inscription à échoué!");
          console.log(err);
        }
      );
    } 
  }

}
