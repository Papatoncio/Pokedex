import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private router:Router, private login:LoginService, private service:UsuariosService){
    this.service.savesUsuario();
    if (!login.isLogin) {
      this.router.navigate(["login"]);
    }
  }
}
