import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { TiendaComponent } from './components/tienda/tienda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'pokeapp',
    component: PokeappComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'maps',
    component: MapScreenComponent,
  },
  {
    path: 'tienda',
    component: TiendaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
