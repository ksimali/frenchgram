import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/users';

  constructor(private http: HttpClient) { }

  // login() method
  public login(email:string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,{email, password});
  }
}
