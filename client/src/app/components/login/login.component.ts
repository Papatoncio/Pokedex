import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { FormGroup } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import swal from 'sweetalert/typings/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario[]
  form: FormGroup = new FormGroup({
    usuario: new FormControl,
    password: new FormControl
  })
  constructor(private service: UsuariosService, private router: Router, private Login:LoginService) { }
  ngOnInit(): void {
  }
  
  login() {
    this.user = this.service.usuario.filter(data => {
      return data.usuario === this.form.get('usuario')?.value
    })
    if(
      this.user[0] != undefined
    ) {
      if(this.user[0].password === this.form.get('password')?.value) {
        this.Login.isLogin = true;
        this.router.navigate(["pokeapp"]);
      } else {
        console.log("No password")
        alert("Contraseña Invalida")
      }
    } else {
      console.log("No usuario")
      console.log(this.user)
      alert("Usuario Invalido")
    }
  }
}
