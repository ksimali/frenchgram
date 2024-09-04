import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService){
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
