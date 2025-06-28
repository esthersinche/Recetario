import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Receta {
  id?: number;
  nombre: string;
  ingredientes: string;
  preparacion: string;
  categoria: string;
  imagen_url: string;
}

@Injectable({
  providedIn: 'root'
})

export class RecetaService {
  private apiUrl = 'http://localhost:3000/api/recetas'; // la API de recetas

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.apiUrl);
  }

  getRecetaById(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.apiUrl}/${id}`);
  }

  createReceta(receta: Receta): Observable<any> {
    return this.http.post(this.apiUrl, receta);
  }

  updateReceta(id: number, receta: Receta): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, receta);
  }

  deleteReceta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
