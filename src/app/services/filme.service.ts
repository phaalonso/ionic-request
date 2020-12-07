import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private base = "https://api.themoviedb.org/3";

  constructor(private http: HttpClient) { }

  get () {
    return this.http.get(`${this.base}/movie/latest?api_key=${environment.movie_api_key}`);
  }
}
