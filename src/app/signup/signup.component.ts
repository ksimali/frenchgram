import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router){
    // creation du form
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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
          console.log(res);
          this.router.navigate(['/login']);
        },
        (err) => {
          alert("L'inscirption a échoué !");
          console.log(err);
        }
      );
    } 
  }

}
