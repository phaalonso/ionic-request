import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    this.buscar()
  }

  buscar() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
