import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  usuario: Usuario = {
    idusuario: 0,
    usuario: '',
    correo: '',
    password: '',
  };

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async saveUsuario(): Promise<void> {
    console.log(this.usuario);
    this.usuarioService.saveUsuario(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['login']);
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
