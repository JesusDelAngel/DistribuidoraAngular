import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { marca } from '../../interfaces/marcaInterface';

@Injectable({
  providedIn: 'root'
})
export class MarcaServiceService {

private apiUrl ='http://localhost:3000/marcas'
  constructor(private http:HttpClient) { }

  obtenerMarca(): Observable<marca[]>{
    return this.http.get<marca[]>(this.apiUrl)
  }
}
