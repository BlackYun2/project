import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GdataService {

  constructor(private http: HttpClient) { }
  getdata(): Observable<product[]> {
    return this.http.get<product[]>("assets/data.json");
  }
}
