import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from '../../interfaces/productInterface.js';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private apiUrl = 'http://localhost:3000/productos'
  constructor(private http: HttpClient) { }


getProductosByCategory(tipo: string): Observable<any[]>{
  const url=`http://localhost:3000/productos/${tipo}`;
  return this.http.get<any[]>(url);
}


  obtenerProductos(): Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl + '/permanentes');
  }

  //
  obtenerProductosFantasia():Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl + '/fantasia');
  }
}






