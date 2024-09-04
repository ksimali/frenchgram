import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder){
    // creation du form
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onLogin(){
    if(this.loginForm.valid){
      //recuperer les infos du form
      const{email, password} = this.loginForm.value;

      this.userService.login(email, password).subscribe(
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
