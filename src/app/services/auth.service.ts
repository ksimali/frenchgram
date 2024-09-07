import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // method getToken() qui va retourner la valeur du token récuperer
  getToken(): string | null{
    return sessionStorage.getItem("authToken");
  }
  //method setToken() qui va recevoir le token en param et la sauvegarder dans la session
  setToken(token: string){
    sessionStorage.setItem("authToken", token);
  }
  constructor() { }

  logout(){
    sessionStorage.removeItem("authToken"); //accès au sessionStorage et effacer le token
  }

  // créer des conditions pour limiter l'accès de l'utilisateur
  isAuthenticated(): boolean{
    if(this.getToken()){
      return true;
    }
    return false;
  }
}
