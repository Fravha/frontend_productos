import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// Definir una interfaz para el tipo de producto
interface Producto {
  producto_id?: number;
  nombre: string;
  precio: number;
  categoria_id: number;
  // Agrega más propiedades según tu modelo de datos
}


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/api/productos';
  private apiUrl1 = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl1}/categories`);
  }

  // Obtener productos, opcionalmente filtrados por categoría
  getProducts(categoryId?: number): Observable<any> {
    const url = categoryId 
      ? `${this.apiUrl}/productos?category=${categoryId}` // Filtrado por categoría
      : `${this.apiUrl}/productos`; // Todos los productos
    return this.http.get(url);
  }

  getProductos(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }

  createProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  updateProducto(id: number, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}