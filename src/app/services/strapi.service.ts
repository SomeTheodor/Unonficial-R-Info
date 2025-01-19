import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/general';
@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private baseUrl = 'http://localhost:1337/api';

  constructor(private http: HttpClient) {}

  // Método para obtener datos de una colección específica
  getData<T>(endpoint: string, params?: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url, { params });
  }

}

