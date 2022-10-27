import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { FormGroup } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

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

  socialUser: SocialUser;
  isLogin: boolean;
  constructor(private service: UsuariosService, private router: Router, private Login: LoginService, private socialAuthService: SocialAuthService) { }
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      console.log('Datos del Usuario');
      console.log(user);
      console.log();

      this.socialUser = user;
      this.isLogin = (user != null);
    });
  }

  loginWithFacebook():void{
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut():void{
    this.socialAuthService.signOut();
  }

  login() {
    this.user = this.service.usuario.filter(data => {
      return data.usuario === this.form.get('usuario')?.value;
    })
    if (
      this.user[0] != undefined
    ) {
      if (this.user[0].password === this.form.get('password')?.value) {
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
