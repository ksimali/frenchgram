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
    this.userService.login("cassim@gmail.com","654321").subscribe(
      (res)=> {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
