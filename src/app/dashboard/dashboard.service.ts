import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http: HttpClient) { }

  public getMovies() {
    return this.http.get("https://e9wua08oq9.execute-api.ap-south-1.amazonaws.com/default/Movie");
  }
}
