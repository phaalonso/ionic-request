import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURI: string = "https://reqres.in/api";

  constructor(private http: HttpClient) { 
  }

  buscar(pagina: number) {
    return this.http.get(`${this.baseURI}/users?page=${pagina}`);
  }
}
