import { Injectable } from '@angular/core';
import { environment } from '../app.config';
import { HttpClient } from '@angular/common/http';
import { loginResponse, User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private MyAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.MyAppUrl = environment.endpoint;
    this.myApiUrl = 'api'
  }
  login(user: User): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${this.MyAppUrl}${this.myApiUrl}/login`, user)
  }
}
