import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
