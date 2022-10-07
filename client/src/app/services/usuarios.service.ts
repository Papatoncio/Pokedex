import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuario:Usuario[];

  API_URI = 'http://localhost:3000/api/usuarios'
  API_URl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {

  }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_URI);
  }

  getUsuario(id: String){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  savesUsuario(){
    this.getUsuarios().subscribe(async data => {
      this.usuario = data;
    })

    console.log(this.usuario)
  }

  saveUsuario(usuario: Usuario){
    return this.http.post(`${this.API_URl}/usuarios`, usuario);
  }

  deleteUsuario(id: string){
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  updateUsuario(id: string, updateUsuario: Usuario){
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updateUsuario);
  }

}
