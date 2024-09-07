import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// Propreties
  title = 'frenchgram';

  isAuth: boolean;
// Constructor
  constructor(private authService: AuthService, private router: Router){
    //stocker le statut de l'utilisateur(connecté ou non) dans isAuth
    this.isAuth = this.authService.isAuthenticated();
    // creer un subscribe pour écouter le route a chaque changement et avoir le status du user 
    router.events.subscribe(
      ()=>{
        this.isAuth = this.authService.isAuthenticated();
      }
    );
  }

// Methods
  // logout() method to logout user
  logout(){
    this.authService.logout();
    alert("Vous avez été déconnecté avec succès!");
    this.router.navigate(["/login"]);
  }
}
