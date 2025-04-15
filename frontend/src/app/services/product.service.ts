import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../app.config';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private MyAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.MyAppUrl = environment.endpoint;
    this.myApiUrl = 'api/materials'
  }
  getProducts():  Observable<Product[]> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Product[]>(`${this.MyAppUrl}${this.myApiUrl}`, { headers: headers});
  }
}
