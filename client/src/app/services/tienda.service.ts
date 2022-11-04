import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  producto:Producto[];

  API_Uri = 'http://localhost:3100/api/products';
  API_Url = 'http://localhost:3100/api';

  constructor(private http: HttpClient) { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.API_Uri);
  }

  getProducto(id: String){
    return this.http.get(`${this.API_Uri}/products/${id}`);
  }

  savesProducto(){
    this.getProductos().subscribe(async data => {
      this.producto = data;
    })

    console.log(this.producto)
  }

  saveProducto(producto: Producto){
    return this.http.post(`${this.API_Url}/products`, producto);
  }

  deleteProducto(id: string){
    return this.http.delete(`${this.API_Uri}/products/${id}`);
  }

  updateProducto(id: string, updateProducto: Producto){
    return this.http.put(`${this.API_Uri}/products/${id}`, updateProducto);
  }
}
