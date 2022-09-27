import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {

  }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getUsuario(id: String){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URI}/usuarios`, usuario);
  }

  deleteUsuario(id: string){
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  updateUsuario(id: string, updateUsuario: Usuario){
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updateUsuario);
  }
}
