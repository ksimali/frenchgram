import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerbApiService {
  private apiUrl:string = 'https://seal-app-v5cj7.ondigitalocean.app/v0/verbs';

  constructor(private http: HttpClient) { }

  getVerb(token: string, verb: string): Observable<any>{
    // defintion du header
    const headers = new HttpHeaders({
      'x-access-token': token
    });
    // defintion du body
    const body = {
      verb,
    }

    return this.http.post(`${this.apiUrl}`, body, {headers});
  }
}
