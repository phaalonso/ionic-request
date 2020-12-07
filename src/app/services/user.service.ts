import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURI = 'https://reqres.in/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  buscar(pagina: number) {
    return this.http.get(`${this.baseURI}/users?page=${pagina}`);
  }

  create(user: any) {
    return this.http.post(`${this.baseURI}/users`, user, this.httpOptions);
  }
}
