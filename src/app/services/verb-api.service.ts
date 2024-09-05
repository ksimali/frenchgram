import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerbApiService {
  private apiUrl = 'https://seal-app-v5cj7.ondigitalocean.app/v0/verbs';

  constructor(private http: HttpClient) { }

  getVerb(token: string): Observable<any>{
    const headers = new HttpHeaders({
      'x-access-token': token
    });

    return this.http.get(`${this.apiUrl}`,{headers});
  }
}
