import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

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
  constructor(@Inject(PLATFORM_ID) private platformId: any) { } // verifier si on est déjà dans le browser

  logout(){
    sessionStorage.removeItem("authToken"); //accès au sessionStorage et effacer le token
  }

  // créer des conditions pour limiter l'accès de l'utilisateur
  isAuthenticated(): boolean{
    if(isPlatformBrowser(this.platformId)){
      return !!this.getToken();
    }
    return false;
  }
}
