import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface product{
    brandProduct: string;
    nameProduct : string;
    descriptionProduct: string;
    availableParts: number;
    price: number;
    img: string;
    numerology: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private apiUrl = 'http://localhost:3000/productos'
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl);
  }
}
